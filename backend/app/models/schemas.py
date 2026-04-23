from pydantic import BaseModel, Field
from enum import Enum
from typing import Optional


# ──────────────────────────────────────────────
# Enums (mirror TypeScript enums)
# ──────────────────────────────────────────────

class PaperSize(str, Enum):
    A4 = "A4"
    Letter = "Letter"


class FontSize(str, Enum):
    PT_10 = "10pt"
    PT_11 = "11pt"
    PT_12 = "12pt"


class LineSpacing(str, Enum):
    Single = "1"
    Relaxed = "1.15"
    Double = "1.5"


class MarginType(str, Enum):
    IEEE = "IEEE"
    Custom = "Custom"


# ──────────────────────────────────────────────
# Core Data Models
# ──────────────────────────────────────────────

class TeamMember(BaseModel):
    id: str
    name: str
    registerNumber: str
    email: Optional[str] = None


class ReportData(BaseModel):
    # Basic Details
    title: str = ""

    # Team Details
    teamMembers: list[TeamMember] = []

    # Institution Details
    collegeName: str = ""
    department: str = ""
    guideName: str = ""

    # Content Sections
    abstract: str = ""
    keywords: str = ""
    introduction: str = ""
    problemStatement: str = ""
    objectives: str = ""
    literatureReview: str = ""
    methodology: str = ""

    # Visuals
    flowchartImage: Optional[str] = None  # Base64 data URI

    results: str = ""
    conclusion: str = ""
    futureScope: str = ""
    references: str = ""


class FormattingOptions(BaseModel):
    paperSize: PaperSize = PaperSize.A4
    fontSize: FontSize = FontSize.PT_10
    lineSpacing: LineSpacing = LineSpacing.Single
    marginType: MarginType = MarginType.IEEE
    marginTop: float = 1.9
    marginBottom: float = 2.54
    marginLeft: float = 1.9
    marginRight: float = 1.9
    columns: int = Field(default=2, ge=1, le=2)


# ──────────────────────────────────────────────
# Request / Response Models
# ──────────────────────────────────────────────

class GenerateRequest(BaseModel):
    """Request to generate content for a specific report section."""
    section: str
    reportData: ReportData
    instructions: Optional[str] = None


class RefineRequest(BaseModel):
    """Request to refine/polish existing text."""
    text: str


class GenerateResponse(BaseModel):
    """Response containing generated content."""
    content: str


class RefineResponse(BaseModel):
    """Response containing refined text."""
    content: str


class ExportRequest(BaseModel):
    """Request to export report as DOCX."""
    reportData: ReportData
    formatting: FormattingOptions = FormattingOptions()


class HealthResponse(BaseModel):
    """Health check response."""
    status: str = "ok"
    version: str = "1.0.0"
