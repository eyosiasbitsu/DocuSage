from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.utils.security import verify_password, create_access_token
from app.routers.Auth.models import get_user_by_email

def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    return user

def login_user(user):
    return {
        "access_token": create_access_token({"sub": user.email}),
        "token_type": "bearer",
    }
