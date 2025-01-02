import uuid
from datetime import datetime
from typing import Annotated, Any

from fastapi import Depends
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import AsyncSession

from sqlalchemy.orm import selectinload
from sqlalchemy import update, func, select

from app.database import get_db
from app.routers.api_v1.Auth.models import (
    User,
    UserEmail,
    UserPhoneNumber,
    UserProfilePicture,
    UserTelegram,
    UserPassword,
    Email_Otp,
    OtpReason,
    Phone_Otp,
    PreferablePersona,
    AskTelegram,
    UserGeneratedImages,
)
from app.routers.api_v1.Auth.protocols import UserRepositoryInterface
from app.routers.api_v1.Auth.schemas import UserCreate
from app.routers.api_v1.Auth.utils import hash_password
from app.routers.api_v1.Persona.models import Persona
from app.routers.api_v1.Service.utils import paginate_response
from app.routers.api_v1.Auth.domain_model import (
    Role,
    UserDomain,
    UserPasswordDomain,
    EmailOtpDomain,
    PhoneOtpDomain,
    AskTelegramDomain,
)


class BaseRepository:
    def __init__(self, db_session: AsyncSession):
        self.db_session = db_session

    async def commit(self):
        await self.db_session.commit()

    async def rollback(self):
        await self.db_session.rollback()

    async def add(self, instance):
        self.db_session.add(instance)
        await self.commit()

    async def delete(self, instance):
        await self.db_session.delete(instance)
        await self.commit()


class UserRepository(BaseRepository, UserRepositoryInterface[AsyncSession]):
    def __init__(self, db_session: AsyncSession):
        super().__init__(db_session)

    async def find_by_id(self, user_id: uuid.UUID) -> UserDomain | None:
        stmt = (
            select(User)
            .filter(User.id == user_id)
            .options(
                selectinload(User.emails),
                selectinload(User.phone_numbers),
                selectinload(User.profile_picture),
                selectinload(User.telegram_user),
                selectinload(User.password),
                selectinload(User.user_info),
            )
        )
        result = await self.db_session.execute(stmt)
        db_user: User | None = result.scalar_one_or_none()
        return db_user.to_dto() if db_user else None

    async def find_by_username(
        self,
        username: str,
    ) -> UserDomain | None:
        stmt = (
            select(User)
            .filter(User.username == username)
            .options(
                selectinload(User.emails),
                selectinload(User.phone_numbers),
                selectinload(User.profile_picture),
                selectinload(User.telegram_user),
                selectinload(User.password),
                selectinload(User.user_info),
            )
        )
        result = await self.db_session.execute(stmt)
        db_user: User | None = result.scalar_one_or_none()
        return db_user.to_dto() if db_user else None

    async def find_by_email(self, email: str) -> UserDomain | None:
        stmt = (
            select(User)
            .join(UserEmail, UserEmail.user_id == User.id)
            .filter(UserEmail.email == email)
            .options(
                selectinload(User.emails),
                selectinload(User.phone_numbers),
                selectinload(User.profile_picture),
                selectinload(User.telegram_user),
                selectinload(User.password),
                selectinload(User.user_info),
            )
        )
        result = await self.db_session.execute(stmt)
        db_user: User | None = result.scalars().first()
        return db_user.to_dto() if db_user else None

    async def find_by_phone_number(self, phone_number: str) -> UserDomain | None:
        stmt = (
            select(User)
            .join(UserPhoneNumber, UserPhoneNumber.user_id == User.id)
            .filter(UserPhoneNumber.phone_number == phone_number)
            .options(
                selectinload(User.emails),
                selectinload(User.phone_numbers),
                selectinload(User.profile_picture),
                selectinload(User.telegram_user),
                selectinload(User.password),
                selectinload(User.user_info),
            )
        )
        result = await self.db_session.execute(stmt)
        db_user: User | None = result.scalars().first()
        return db_user.to_dto() if db_user else None

    async def find_by_telegram_id(self, telegram_id: str) -> UserDomain | None:
        stmt = (
            select(User)
            .join(UserTelegram, UserTelegram.user_id == User.id)
            .filter(UserTelegram.telegram_id == telegram_id)
            .options(
                selectinload(User.emails),
                selectinload(User.phone_numbers),
                selectinload(User.profile_picture),
                selectinload(User.telegram_user),
                selectinload(User.user_info),
                selectinload(User.password),
            )
        )
        result = await self.db_session.execute(stmt)
        db_user: User | None = result.scalar_one_or_none()
        return db_user.to_dto() if db_user else None

    async def create_user(self, user_data: UserCreate) -> UserDomain:
        new_user = User(
            username=user_data.username,
            signup_platform=user_data.signup_platform,
            telegram_user=[],
            user_info=None,
            emails=[],
            phone_numbers=[],
            profile_picture=None,
        )
        self.db_session.add(new_user)
        await self.db_session.flush()

        if user_data.email:
            user_email = UserEmail(email=user_data.email, user_id=new_user.id)
            self.db_session.add(user_email)
            new_user.emails.append(user_email)

        if user_data.phone_number:
            user_phone = UserPhoneNumber(
                phone_number=user_data.phone_number, user_id=new_user.id
            )
            self.db_session.add(user_phone)
            new_user.phone_numbers.append(user_phone)

        if user_data.password:
            user_password = UserPassword(
                hashed_password=user_data.password, user_id=new_user.id
            )
            self.db_session.add(user_password)

        await self.commit()
        return new_user.to_dto()

    async def update_user(self, user_id: uuid.UUID, updated_data: dict):
        update_stmt = update(User).where(User.id == user_id).values(**updated_data)
        await self.db_session.execute(update_stmt)
        await self.commit()

    async def delete_user(self, user_id: uuid.UUID) -> dict:
        try:
            stmt = select(User).where(User.id == user_id)
            result = await self.db_session.execute(stmt)

            db_user = result.scalars().one_or_none()
            if db_user:
                await self.delete(db_user)
                return {
                    "status": "success",
                    "message": f"User with ID {user_id} has been deleted.",
                }
            else:
                return {
                    "status": "error",
                    "message": f"User with ID {user_id} not found.",
                }

        except SQLAlchemyError as e:
            await self.db_session.rollback()
            # TODO: log error
            return {
                "status": "error",
                "message": f"An error occurred while deleting the user. \n {str(e)}",
            }

    async def get_all_paginated(
        self, limit: int, offset: int, search: str, order_by_clause
    ):
        stmt = (
            select(User)
            .options(
                selectinload(User.emails),
                selectinload(User.phone_numbers),
                selectinload(User.profile_picture),
                selectinload(User.telegram_user),
                selectinload(User.password),
                selectinload(User.user_info),
            )
            .where(
                User.is_activated,
                User.username.ilike(f"%{search}%"),
            )
        )

        def transform(users: [User]):
            return [user.to_dto() for user in users]

        return await paginate_response(
            statement=stmt,
            db_session=self.db_session,
            model=UserDomain,
            transformer=transform,
            offset=offset,
            limit=limit,
            sorting_attribute=order_by_clause,
            to_orm=True,
        )

    async def find_user_password(self, user_id: uuid.UUID) -> UserPasswordDomain | None:
        stmt = select(UserPassword).where(UserPassword.user_id == user_id)
        result = await self.db_session.execute(stmt)
        db_password: UserPassword | None = result.scalar_one_or_none()
        return db_password.to_dto() if db_password else None

    async def create_user_password(
        self, user_id: uuid.UUID, hashed_password: str
    ) -> UserPasswordDomain:
        new_password = UserPassword(user_id=user_id, hashed_password=hashed_password)
        self.db_session.add(new_password)
        await self.commit()
        return new_password.to_dto()

    # TODO: write test for this
    async def create_user_with_details(
        self,
        user: UserCreate,
        otp_value: str,
        avatar_picture: str,
    ):
        try:
            new_user_id = uuid.uuid4()
            db_user: User = User(
                id=new_user_id,
                username=user.username,
                signup_platform=user.signup_platform,
                role=Role.USER.value,
            )

            to_be_added: list[Any] = [db_user]

            db_email = UserEmail(email=user.email, user_id=new_user_id)
            to_be_added.append(db_email)

            db_email_otp = Email_Otp(
                email=user.email,
                user_id=new_user_id,
                otp=otp_value,
                reason=OtpReason.ACTIVATE.value,
            )
            to_be_added.append(db_email_otp)

            db_password = UserPassword(
                hashed_password=hash_password(user.password), user_id=new_user_id
            )
            db_profile_picture = UserProfilePicture(
                profile_picture=avatar_picture, user_id=new_user_id
            )

            to_be_added.extend([db_password, db_profile_picture])

            db_user.profile_picture = db_profile_picture
            db_user.password = db_password
            db_user.emails = [db_email]
            db_user.email_otp = [db_email_otp]

            db_user.telegram_user = []
            db_user.phone_numbers = []
            db_user.user_info = None

            self.db_session.add(db_user)

            await self.db_session.commit()

            return db_user.to_dto()
        except SQLAlchemyError:
            await self.db_session.rollback()

    async def create_email_otp(
        self, user_id: uuid.UUID, email: str, otp: str, reason: OtpReason
    ) -> EmailOtpDomain:
        new_otp = Email_Otp(user_id=user_id, email=email, otp=otp, reason=reason.value)
        self.db_session.add(new_otp)
        await self.commit()
        return new_otp.to_dto()

    async def create_phone_otp(
        self, user_id: uuid.UUID, phone_number: str, otp: str, reason: OtpReason
    ) -> PhoneOtpDomain:
        new_otp = Phone_Otp(
            user_id=user_id, phone_number=phone_number, otp=otp, reason=reason.value
        )
        self.db_session.add(new_otp)
        await self.commit()
        return new_otp.to_dto()

    async def find_active_email_otp(
        self, user_id: uuid.UUID, reason: OtpReason
    ) -> EmailOtpDomain | None:
        stmt = (
            select(Email_Otp)
            .join(User, User.id == Email_Otp.user_id)
            .options(selectinload(Email_Otp.email_instance))
            .options(selectinload(Email_Otp.user))
            .where(
                User.id == user_id,
                Email_Otp.reason == reason.value,
                ~Email_Otp.is_used,
            )
        )
        result = await self.db_session.execute(stmt)
        db_otp: Email_Otp | None = result.scalars().one_or_none()
        return db_otp.to_dto() if db_otp else None

    async def find_active_phone_otp(
        self, user_id: uuid.UUID, reason: OtpReason
    ) -> PhoneOtpDomain | None:
        stmt = (
            select(Phone_Otp)
            .join(User, User.id == Phone_Otp.user_id)
            .options(selectinload(Phone_Otp.phone_number_instance))
            .options(selectinload(Phone_Otp.user))
            .where(
                User.id == user_id,
                Phone_Otp.reason == reason.value,
                ~Phone_Otp.is_used,
            )
        )
        result = await self.db_session.execute(stmt)
        db_otp: Phone_Otp | None = result.scalars().one_or_none()
        return db_otp.to_dto() if db_otp else None

    async def deactivate_user_otps(
        self, otp_reason: OtpReason, user_activation: bool, user_id: uuid.UUID
    ):
        stmt = (
            select(Phone_Otp)
            .join(Phone_Otp.user)
            .options(selectinload(Phone_Otp.user))
            .where(
                User.id == user_id,
                Phone_Otp.reason == otp_reason.value,
                Phone_Otp.user.has(User.is_activated == user_activation),
            )
        )

        res = await self.db_session.execute(stmt)
        phone_otps: list[Phone_Otp] = list(res.scalars().all())

        for phone_otp in phone_otps:
            phone_otp.is_used = True

        stmt = (
            select(Email_Otp)
            .join(Email_Otp.user)
            .options(selectinload(Email_Otp.user))
            .where(
                User.id == user_id,
                Email_Otp.reason == otp_reason.value,
                Email_Otp.user.has(User.is_activated == user_activation),
            )
        )

        res = await self.db_session.execute(stmt)
        email_otps: list[Email_Otp] = list(res.scalars().all())

        for email_otp in email_otps:
            email_otp.is_used = True

        await self.db_session.commit()

    async def activate_user(self, user_id: uuid.UUID) -> UserDomain | None:
        stmt = (
            select(User)
            .options(
                selectinload(User.emails),
                selectinload(User.phone_numbers),
                selectinload(User.profile_picture),
                selectinload(User.telegram_user),
                selectinload(User.password),
                selectinload(User.user_info),
            )
            .where(User.id == user_id)
        )
        result = await self.db_session.execute(stmt)

        db_user: User | None = result.scalars().one_or_none()

        if not db_user:
            return None

        # TODO: if email otp or phone otp activate email/phone and remove otp

        db_user.is_activated = True
        await self.db_session.commit()

        return db_user.to_dto()


class PreferablePersonaRepository(BaseRepository):
    async def add_preferable_personas(
        self, user_id: uuid.UUID, persona_ids: list[uuid.UUID]
    ):
        stmt = select(Persona.id).filter(Persona.id.in_(persona_ids))
        result = await self.db_session.execute(stmt)

        valid_persona_ids = result.scalars().all()

        for persona_id in valid_persona_ids:
            db_preferable_persona: PreferablePersona | None = (
                await PreferablePersona.find_by_user_id_and_persona_id(
                    db_session=self.db_session, user_id=user_id, persona_id=persona_id
                )
            )

            if not db_preferable_persona:
                preferable_persona = PreferablePersona(
                    user_id=user_id, persona_id=persona_id
                )
                self.db_session.add(preferable_persona)
        await self.commit()

    async def find_by_user_id_and_persona_id(
        self, user_id: uuid.UUID, persona_id: uuid.UUID
    ):
        stmt = select(PreferablePersona).where(
            (PreferablePersona.user_id == user_id)
            & (PreferablePersona.persona_id == persona_id)
        )
        result = await self.db_session.execute(stmt)
        return result.scalar_one_or_none()


class AskTelegramRepository(BaseRepository):
    async def find_by_user_id(self, user_id: uuid.UUID) -> list[AskTelegramDomain]:
        stmt = select(AskTelegram).filter(AskTelegram.user_id == user_id)
        result = await self.db_session.execute(stmt)
        db_ask_telegrams: list[AskTelegram] = result.scalars().all()
        return [ask_telegram.to_dto() for ask_telegram in db_ask_telegrams]

    async def add_ask_telegram(
        self,
        user_id: uuid.UUID,
        question: str,
        answer: str,
        token_usage: int,
        group_id: int,
    ) -> AskTelegramDomain:
        ask_telegram = AskTelegram(
            user_id=user_id,
            question=question,
            answer=answer,
            token_usage=token_usage,
            group_id=group_id,
        )
        await self.add(ask_telegram)
        return ask_telegram.to_dto()


class UserGeneratedImagesRepository(BaseRepository):
    async def total_generated_image(self, user_id: uuid.UUID, date: datetime):
        stmt = select(func.count(UserGeneratedImages.id)).where(
            UserGeneratedImages.user_id == user_id,
            func.date(UserGeneratedImages.created_at) == date.date(),
        )
        result = await self.db_session.execute(stmt)
        return result.scalar()

    async def get_by_message_id(self, message_id: str):
        stmt = select(UserGeneratedImages).where(
            UserGeneratedImages.message_id == message_id
        )
        result = await self.db_session.execute(stmt)
        return result.scalar_one_or_none()

    async def add_new_generated_image(
        self,
        user_id: uuid.UUID,
        prompt: str,
        image_url: str,
        group_id: int,
        group_name: str,
        message_id: str,
    ):
        new_generated_image = UserGeneratedImages(
            user_id=user_id,
            image_url=image_url,
            prompt=prompt,
            group_id=group_id,
            group_name=group_name,
            message_id=message_id,
        )
        await self.add(new_generated_image)
        return new_generated_image


def get_user_repository(db_session: Annotated[AsyncSession, Depends(get_db)]):
    return UserRepository(db_session=db_session)


def get_preferable_persona_repository(
    db_session: Annotated[AsyncSession, Depends(get_db)]
):
    return PreferablePersonaRepository(db_session=db_session)


def get_ask_telegram_repository(db_session: Annotated[AsyncSession, Depends(get_db)]):
    return AskTelegramRepository(db_session=db_session)


def get_user_generated_images_repository(
    db_session: Annotated[AsyncSession, Depends(get_db)]
):
    return UserGeneratedImagesRepository(db_session=db_session)
