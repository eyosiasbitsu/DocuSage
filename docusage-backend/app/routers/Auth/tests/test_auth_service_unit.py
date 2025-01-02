import aiosmtplib
import pytest
from app.database.Session import FakeDBSession
from app.routers.api_v1.Auth.domain_model import SignUpPlatform, UserDomain
from app.routers.api_v1.Auth.exceptions import ERROR_SENDING_EMAIL
from app.routers.api_v1.Auth.protocols import SMTPInterface, UserRepositoryInterface
from app.routers.api_v1.Auth.schemas import UserCreate
from app.routers.api_v1.Auth.service import create_new_user_email


class FakerUserRepository(UserRepositoryInterface[FakeDBSession]):
    async def create_user_with_details(
        self,
        user: UserCreate,
        otp_value: str,
        avatar_picture: str,
    ):
        return UserDomain()


class FakeSMTPService(SMTPInterface):
    async def send_email(self, recipient_email: str, otp_value: str):
        return "Email Sent"


class FakeSMTPServiceException(SMTPInterface):
    async def send_email(self, recipient_email: str, otp_value: str):
        raise aiosmtplib.errors.SMTPException("Email Not Sent")


@pytest.mark.asyncio
async def test_create_new_user_service():
    fake_repository = FakerUserRepository(FakeDBSession())

    fake_smtp_service = FakeSMTPServiceException()

    user_data = UserCreate(
        username="testuser",
        email="test@example.com",
        phone_number="+251909090909",
        password="password123",
        signup_platform=SignUpPlatform.MOBILE_IOS,
    )
    # raises

    with pytest.raises(ERROR_SENDING_EMAIL):
        await create_new_user_email(
            user_repository=fake_repository,
            user=user_data,
            smtp_service=fake_smtp_service,
        )
