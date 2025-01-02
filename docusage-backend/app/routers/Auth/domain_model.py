import uuid
from dataclasses import dataclass
from datetime import datetime
from enum import Enum
from typing import List, Optional


@dataclass()
class UserDomainModel:
    id: uuid.UUID
    created_at: datetime
    updated_at: datetime
    username: str
    is_activated: bool
    is_archived: bool
    is_developer: bool
    signup_platform: str
    profile_picture: str
    hashed_password: str


@dataclass
class Role(int, Enum):
    USER = 1
    ADMIN = 2
    SUPER_ADMIN = 3

    @classmethod
    def get_value(cls, value: int):
        for role in cls:
            if role.value == value:
                return role
        raise ValueError("Role not found")


@dataclass
class SignUpPlatform(str, Enum):
    TELEGRAM_BOT = "telegram_bot"
    TELEGRAM_MINI = "telegram_mini"
    MOBILE_ANDROID = "mobile_android"
    MOBILE_IOS = "mobile_ios"
    WEB = "web"

    @classmethod
    def get_value(cls, value: str):
        for platform in cls:
            if platform.value == value:
                return platform
        raise ValueError("Platform not found")


@dataclass
class OtpReason(Enum):
    ACTIVATE = 1
    RESET_PASSWORD = 2


@dataclass
class AskTelegramDomain:
    id: uuid.UUID
    user_id: uuid.UUID
    question: str
    answer: str
    token_usage: int
    group_id: int
    created_at: datetime


@dataclass
class UserTelegramDomain:
    user_id: uuid.UUID
    telegram_id: str
    full_name: Optional[str]
    created_at: datetime


@dataclass
class UserPhoneNumberDomain:
    user_id: uuid.UUID
    phone_number: str
    created_at: datetime
    updated_at: datetime
    is_activated: bool


@dataclass
class UserEmailDomain:
    user_id: uuid.UUID
    email: str
    created_at: datetime
    updated_at: datetime
    is_activated: bool


@dataclass
class UserProfilePictureDomain:
    user_id: uuid.UUID
    profile_picture: str
    created_at: datetime
    updated_at: datetime


@dataclass
class UserPasswordDomain:
    user_id: uuid.UUID
    hashed_password: str
    created_at: datetime
    updated_at: datetime


@dataclass
class EmailOtpDomain:
    id: int
    user_id: uuid.UUID
    is_used: bool
    email: str
    otp: str
    reason: OtpReason
    created_at: datetime
    updated_at: datetime


@dataclass
class PhoneOtpDomain:
    id: int
    user_id: uuid.UUID
    is_used: bool
    phone_number: str
    otp: str
    reason: OtpReason
    created_at: datetime
    updated_at: datetime


@dataclass
class UserInfoDomain:
    id: uuid.UUID
    user_id: uuid.UUID
    creator_id: uuid.UUID
    first_name: str
    last_name: str
    created_at: datetime
    updated_at: datetime


@dataclass
class UserGeneratedImagesDomain:
    id: uuid.UUID
    user_id: uuid.UUID
    prompt: str
    image_url: str
    created_at: datetime
    group_id: int
    group_name: str
    message_id: str


@dataclass
class PreferablePersonaDomain:
    user_id: uuid.UUID
    persona_id: uuid.UUID


@dataclass
class UserDomain:
    id: uuid.UUID
    username: str
    role: Role
    created_at: datetime
    updated_at: datetime
    is_archived: bool
    is_activated: bool
    is_premium: bool
    is_developer: bool
    signup_platform: SignUpPlatform
    telegram_user: List[UserTelegramDomain]
    phone_numbers: List[UserPhoneNumberDomain]
    emails: List[UserEmailDomain]
    profile_picture: Optional[UserProfilePictureDomain]
    password: Optional[UserPasswordDomain]
    user_info: UserInfoDomain | None
