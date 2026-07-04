from fastapi import FastAPI
from app.routes.health import router as health_router
from app.config.settings import AWS_REGION
from app.routes.ec2 import router as ec2_router

app = FastAPI(
    title="CloudGuardian AI API",
    version="1.0.0",
    description="AI Powered AWS Cloud Monitoring Platform"
)

# Include Routes
app.include_router(health_router)
app.include_router(ec2_router)

@app.get("/")
def root():
    return {
        "message": "🚀 CloudGuardian AI Backend Running",
        "region": AWS_REGION,
        "status": "online",
        "version": "1.0.0"
    }