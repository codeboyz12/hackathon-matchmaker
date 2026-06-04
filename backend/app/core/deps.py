import redis.asyncio as aioredis
from fastapi import Depends, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError

from app.core.db import redis_dependency
from app.core.security import decode_access_token, is_denylisted

_bearer = HTTPBearer(auto_error=False)


async def get_current_user_id(
    credentials: HTTPAuthorizationCredentials | None = Depends(_bearer),
    redis: aioredis.Redis = Depends(redis_dependency),
) -> str:
    if not credentials:
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = credentials.credentials
    try:
        user_id = decode_access_token(token)
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    if await is_denylisted(redis, token):
        raise HTTPException(status_code=401, detail="Token has been revoked")

    return user_id


async def get_optional_user_id(
    credentials: HTTPAuthorizationCredentials | None = Depends(_bearer),
    redis: aioredis.Redis = Depends(redis_dependency),
) -> str | None:
    """Like get_current_user_id but returns None instead of raising when the
    request is unauthenticated or carries an invalid/revoked token. Use for
    endpoints that are public but personalize their result when a user is known."""
    if not credentials:
        return None
    token = credentials.credentials
    try:
        user_id = decode_access_token(token)
    except JWTError:
        return None
    if await is_denylisted(redis, token):
        return None
    return user_id
