import pytest

from app.routers.api_v1.Auth.service import SMTPService


@pytest.mark.asyncio
async def test_send_smtp_email_service():
    email = "abel.kidanemariam@a2sv.org"
    otp = "12356"
    smtp_service = SMTPService()
    await smtp_service.send_email(recipient_email=email, otp_value=otp)
