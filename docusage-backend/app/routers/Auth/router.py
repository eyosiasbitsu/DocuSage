from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.routers.Auth.schemas import UserCreate, UserResponse, Token
from app.database.database import get_db
from app.routers.Auth.models import create_user
from app.routers.Auth.service import authenticate_user, login_user

auth_router = APIRouter()

@auth_router.post("/signup", response_model=UserResponse)
def signup(user_data: UserCreate, db: Session = Depends(get_db)):
    user = create_user(db, user_data.username, user_data.email, user_data.password)
    return user

@auth_router.post("/login", response_model=Token)
def login(email: str, password: str, db: Session = Depends(get_db)):
    user = authenticate_user(db, email, password)
    return login_user(user)
