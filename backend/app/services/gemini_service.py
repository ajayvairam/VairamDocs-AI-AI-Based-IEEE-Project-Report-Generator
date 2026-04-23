from google import genai
from app.config import settings
from app.models.schemas import ReportData

# ──────────────────────────────────────────────
# Gemini Client (lazy singleton)
# ──────────────────────────────────────────────

_client: genai.Client | None = None


def _get_client() -> genai.Client:
    """Return a cached Gemini GenAI client."""
    global _client
    if _client is None:
        if not settings.GEMINI_API_KEY:
            raise RuntimeError(
                "GEMINI_API_KEY is not set. "
                "Please add it to backend/.env"
            )
        _client = genai.Client(api_key=settings.GEMINI_API_KEY)
    return _client


# ──────────────────────────────────────────────
# Public API
# ──────────────────────────────────────────────

async def generate_section_content(
    section: str,
    report_data: ReportData,
    instructions: str | None = None,
) -> str:
    """
    Generate content for a specific section of the IEEE report
    using the Gemini model.
    """
    client = _get_client()

    # Get existing content for the section (if any)
    existing_content = getattr(report_data, section, "")

    prompt = f"""
You are an expert academic writing assistant helping a student write an IEEE project report.

Project Details:
Title: {report_data.title}
Keywords: {report_data.keywords}

Task: Write or improve the "{section}" section of the report.

Existing content provided by user (if any): "{existing_content}"

User Instructions: {instructions or "Draft a professional, academic version of this section adhering to IEEE style tone (formal, objective, concise)."}

Requirements:
- Use formal academic English.
- Be concise but thorough.
- If it is the 'References' section, format them strictly in IEEE citation style.
- If it is 'Objectives', use a numbered list format if appropriate.
- Do not include markdown formatting like **bold** or # headings unless strictly necessary for structure within the section. Plain text is preferred.

Output ONLY the content for this section.
"""

    response = client.models.generate_content(
        model=settings.GEMINI_MODEL,
        contents=prompt,
    )

    return response.text.strip()


async def refine_text(text: str) -> str:
    """
    Refine the given text to meet IEEE academic standards.
    Fixes grammar, improves flow, and ensures a formal tone.
    """
    client = _get_client()

    prompt = f"""
Refine the following text to meet IEEE academic standards. Fix grammar, improve flow, and ensure a formal tone.

Text: "{text}"

Output ONLY the refined text.
"""

    response = client.models.generate_content(
        model=settings.GEMINI_MODEL,
        contents=prompt,
    )

    return response.text.strip()
