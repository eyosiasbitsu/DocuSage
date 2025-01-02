from fastapi import FastAPI
from app.routers.Auth.router import auth_router


app = FastAPI()

app.include_router(auth_router, prefix="/api/v1/auth")
