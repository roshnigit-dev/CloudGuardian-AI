from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "CloudGuardian AI Backend",
        "version": "1.0.0"
    }