from fastapi import FastAPI
from app.routers.Auth.router import auth_router


app = FastAPI()

app.include_router(auth_router, prefix="/api/v1/auth")


#Hostname = dpg-ctrfm2lds78s739l6lv0-a
#Port = 5432
#Username =docusage_db
#Password = op9rbtbSB8K8glZIr9uXmD6LHsHjLv7p

#Exteranl IP =postgresql://docusage:op9rbtbSB8K8glZIr9uXmD6LHsHjLv7p@dpg-ctrfm2lds78s739l6lv0-a.frankfurt-postgres.render.com/docusage_db