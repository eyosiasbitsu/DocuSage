# Import required libraries
from logging.config import fileConfig
from sqlalchemy import engine_from_config, pool
from alembic import context

from config import URL_database

# Configure Alembic
config = context.config
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Import your models' metadata
from app.models.user import Base  # Adjust this path to your models
target_metadata = Base.metadata

# Offline and online migration setups
def run_migrations_offline() -> None:
    context.configure(
        url=URL_database,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online() -> None:
    connectable = engine_from_config(
        {"sqlalchemy.url": URL_database},
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata
        )
        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
