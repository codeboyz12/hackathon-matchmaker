import time
from typing import Any, Dict

from fastapi import APIRouter
from fastapi.responses import JSONResponse

from app.core.db import get_mongo_client, get_redis

router = APIRouter(tags=["Health"])
_start_time = time.time()


@router.get("/health", summary="System health check")
async def health_check() -> JSONResponse:
    status: Dict[str, Any] = {
        "api": "ok",
        "uptime_seconds": round(time.time() - _start_time, 2),
        "services": {
            "mongodb": await _check_mongo(),
            "redis":   await _check_redis(),
        },
    }
    overall_ok = all(v["status"] == "ok" for v in status["services"].values())
    status["status"] = "ok" if overall_ok else "degraded"
    return JSONResponse(content=status, status_code=200 if overall_ok else 503)


async def _check_mongo() -> Dict[str, Any]:
    try:
        result = await get_mongo_client().admin.command("ping")
        return {"status": "ok", "detail": result}
    except RuntimeError as e:
        return {"status": "offline", "detail": str(e)}
    except Exception as e:
        return {"status": "degraded", "detail": str(e)}


async def _check_redis() -> Dict[str, Any]:
    try:
        pong = await get_redis().ping()
        return {"status": "ok", "detail": "PONG" if pong else "no response"}
    except RuntimeError as e:
        return {"status": "offline", "detail": str(e)}
    except Exception as e:
        return {"status": "degraded", "detail": str(e)}
