"""
AI content generation router.

Endpoints:
  POST /api/generate/section — Generate content for a report section
  POST /api/generate/refine  — Refine/polish existing text
"""

from fastapi import APIRouter, HTTPException

from app.models.schemas import (
    GenerateRequest,
    GenerateResponse,
    RefineRequest,
    RefineResponse,
)
from app.services.gemini_service import generate_section_content, refine_text

router = APIRouter(prefix="/api/generate", tags=["AI Generation"])


@router.post("/section", response_model=GenerateResponse)
async def generate_section(request: GenerateRequest):
    """Generate AI content for a specific section of the IEEE report."""
    try:
        content = await generate_section_content(
            section=request.section,
            report_data=request.reportData,
            instructions=request.instructions,
        )
        return GenerateResponse(content=content)
    except RuntimeError as e:
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate content: {str(e)}",
        )


@router.post("/refine", response_model=RefineResponse)
async def refine(request: RefineRequest):
    """Refine existing text to meet IEEE academic standards."""
    try:
        content = await refine_text(text=request.text)
        return RefineResponse(content=content)
    except RuntimeError as e:
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to refine text: {str(e)}",
        )
