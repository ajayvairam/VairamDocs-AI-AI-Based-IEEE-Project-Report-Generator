"""
VairamDocx AI — FastAPI Backend

Main application entry point.
Run with: uvicorn app.main:app --reload --port 8000
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.models.schemas import HealthResponse
from app.routers import generate, export

# ──────────────────────────────────────────────
# App Initialization
# ──────────────────────────────────────────────

app = FastAPI(
    title="VairamDocx AI API",
    description="Backend API for the VairamDocx AI IEEE Project Report Generator",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# ──────────────────────────────────────────────
# CORS Middleware
# ──────────────────────────────────────────────

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ──────────────────────────────────────────────
# Routers
# ──────────────────────────────────────────────

app.include_router(generate.router)
app.include_router(export.router)

# ──────────────────────────────────────────────
# Health Check
# ──────────────────────────────────────────────

@app.get("/", response_model=HealthResponse, tags=["Health"])
async def health_check():
    """Health check endpoint."""
    return HealthResponse(status="ok", version="1.0.0")


@app.get("/api/health", response_model=HealthResponse, tags=["Health"])
async def api_health():
    """API health check endpoint."""
    return HealthResponse(status="ok", version="1.0.0")
