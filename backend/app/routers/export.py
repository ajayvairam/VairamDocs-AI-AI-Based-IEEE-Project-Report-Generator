"""
DOCX export router.

Endpoints:
  POST /api/export/docx — Generate and download an IEEE-formatted DOCX report
"""

from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse

from app.models.schemas import ExportRequest
from app.services.docx_service import generate_docx

router = APIRouter(prefix="/api/export", tags=["Export"])


@router.post("/docx")
async def export_docx(request: ExportRequest):
    """
    Generate an IEEE-formatted DOCX file from the report data
    and return it as a downloadable file.
    """
    try:
        buffer = generate_docx(
            report_data=request.reportData,
            formatting=request.formatting,
        )

        filename = f"{request.reportData.title or 'Report'}.docx"
        # Sanitize filename (remove special characters)
        safe_filename = "".join(
            c for c in filename if c.isalnum() or c in (' ', '-', '_', '.')
        ).strip()

        return StreamingResponse(
            buffer,
            media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            headers={
                "Content-Disposition": f'attachment; filename="{safe_filename}"'
            },
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate DOCX: {str(e)}",
        )
