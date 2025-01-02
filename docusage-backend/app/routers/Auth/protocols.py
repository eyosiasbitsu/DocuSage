from abc import ABC, abstractmethod
from typing import Generic

import uuid
from app.database.Session import SessionType
from app.routers.api_v1.Auth.domain_model import UserDomain, UserPasswordDomain

from app.routers.api_v1.Auth.schemas import UserCreate


class SMTPInterface(ABC):
    async def send_email(self, recipient_email: str, otp_value: str):
        raise NotImplementedError


class UserRepositoryInterface(ABC, Generic[SessionType]):
    db_session: SessionType

    def __init__(self, db_session: SessionType):
        self.db_session = db_session

    @abstractmethod
    async def create_user_with_details(
        self,
        user: UserCreate,
        otp_value: str,
        avatar_picture: str,
    ) -> UserDomain:
        raise NotImplementedError

    @abstractmethod
    async def find_by_username(
        self,
        username: str,
    ) -> UserDomain | None:
        pass

    @abstractmethod
    async def delete_user(self, user_id: uuid.UUID) -> dict:
        pass

    @abstractmethod
    async def find_by_email(self, email: str) -> UserDomain | None:
        pass

    @abstractmethod
    async def find_user_password(self, user_id: uuid.UUID) -> UserPasswordDomain | None:
        pass
