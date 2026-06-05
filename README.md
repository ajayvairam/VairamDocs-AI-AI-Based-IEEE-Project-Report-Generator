<div align="center">

# 💎 VairamDocx AI

### *Where Student Reports Shine Like a Diamond*

An AI-powered full-stack web application that automates the generation and formatting of academic project reports according to strict **IEEE conference standards**.

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Gemini](https://img.shields.io/badge/Google_Gemini-2.5_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=for-the-badge)](#-license)

---

**[Getting Started](#-getting-started)** · **[Features](#-key-features)** · **[Tech Stack](#-tech-stack)** · **[API Reference](#-api-reference)** · **[Usage Guide](#-usage-guide)**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Demo & Screenshots](#-demo--screenshots)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Usage Guide](#-usage-guide)
- [IEEE Formatting Details](#-ieee-formatting-details)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## 🚀 Overview

Writing academic project reports can be tedious, especially when dealing with complex formatting rules like IEEE conference standards. **VairamDocx AI** solves this by combining the power of **Google's Gemini 2.5 Flash AI** with automated **DOCX document generation**.

Simply provide your project details, team members, and basic pointers — the AI will draft professional academic content (Abstract, Introduction, Methodology, etc.). Once reviewed, export the entire report as a perfectly formatted, **double-column IEEE-standard DOCX file** — ready for submission.

### The Problem

- Students spend **hours** wrestling with Word formatting instead of focusing on content.
- IEEE templates are strict — wrong margins, fonts, or column layouts lead to rejected submissions.
- Writing formal academic prose is challenging, especially for non-native English speakers.

### The Solution

VairamDocx AI handles **both content and formatting** in one streamlined workflow:

1. **AI writes** your sections using context-aware prompts.
2. **You review and refine** with a built-in academic editor.
3. **Export a pixel-perfect DOCX** that meets IEEE specifications out of the box.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🤖 **AI Content Generation** | Instantly draft complex sections like Literature Review, Methodology, and Future Scope using context-aware Gemini 2.5 Flash AI |
| ✍️ **Professional Refinement** | A built-in "Refine" tool that acts as an academic editor — fixes grammar and elevates tone to meet IEEE standards |
| 📐 **IEEE Standard Formatting** | Automatic dual-column layouts, proper heading hierarchy (Roman numeral numbering), Times New Roman font, and correct margin specifications |
| 📄 **Native DOCX Export** | Server-side document generation using `python-docx` ensures flawless MS Word files that are fully editable |
| 👥 **Team Collaboration Ready** | Easily include multiple team members with names, register numbers, guide details, and institutional information |
| 📊 **Visual Flowcharts** | Support for uploading and inserting system architecture diagrams (Base64) directly into the methodology section of the final document |
| 🔒 **Secure Architecture** | The Gemini API key is securely managed server-side in the Python backend — never exposed to the client |
| 📱 **Responsive Design** | Full mobile support with an Editor/Preview tab toggle; desktop users get a side-by-side live preview |
| ⚙️ **Customizable Formatting** | Adjust paper size (A4/Letter), font size, line spacing, column count, and margins before export |
| 🎨 **Premium Landing Page** | A stunning glassmorphism-inspired dark mode landing page with micro-animations and a professional brand identity |

---

## 🖼️ Demo & Screenshots

> **Tip:** Run the project locally to experience the full interactive demo with AI generation capabilities.

### Landing Page
The premium dark-mode landing page with glassmorphism effects, gradient animations, and a clear call-to-action.

### Editor View
A split-pane interface — the left panel holds the accordion-style editor with AI generation buttons, and the right panel shows a live IEEE-formatted preview.

### DOCX Output
The exported Word document features proper IEEE double-column layout, centered title, author blocks, and Roman numeral section headings.

---

## 🛠️ Tech Stack

This project uses a modern **monorepo architecture** divided into a React frontend and a FastAPI backend.

### Frontend

| Technology | Purpose | Version |
|---|---|---|
| [React](https://react.dev) | UI Framework | 19.2+ |
| [TypeScript](https://typescriptlang.org) | Type Safety | 5.8 |
| [Vite](https://vitejs.dev) | Build Tool & Dev Server | 6.2+ |
| [Tailwind CSS](https://tailwindcss.com) | Utility-First Styling (via CDN) | 3.x |
| [Lucide React](https://lucide.dev) | Icon Library | 0.555+ |
| Native `fetch` API | Backend Communication | — |

### Backend

| Technology | Purpose | Version |
|---|---|---|
| [FastAPI](https://fastapi.tiangolo.com) | REST API Framework | 0.115+ |
| [Uvicorn](https://www.uvicorn.org) | ASGI Server | 0.34+ |
| [Google GenAI SDK](https://ai.google.dev) | Gemini AI Integration | 1.14+ |
| [python-docx](https://python-docx.readthedocs.io) | DOCX Document Generation | 1.1+ |
| [Pydantic](https://docs.pydantic.dev) | Data Validation & Settings | 2.9+ |
| [python-dotenv](https://pypi.org/project/python-dotenv/) | Environment Variable Loading | 1.1+ |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLIENT (Browser)                            │
│                                                                     │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────────────┐  │
│   │  Landing Page │───▶│   Editor UI  │───▶│   Report Preview     │  │
│   │  (Dark Mode)  │    │  (Accordion) │    │   (IEEE Formatted)   │  │
│   └──────────────┘    └──────┬───────┘    └──────────────────────┘  │
│                              │                                      │
│                   ┌──────────┴──────────┐                           │
│                   │  geminiService.ts   │                           │
│                   │  (API Client Layer) │                           │
│                   └──────────┬──────────┘                           │
└──────────────────────────────┼──────────────────────────────────────┘
                               │  HTTP (Vite Proxy → :8000)
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       SERVER (FastAPI)                               │
│                                                                     │
│   ┌─────────────┐     ┌─────────────────────────────────────────┐  │
│   │  main.py    │────▶│              Routers                     │  │
│   │  (CORS,     │     │  ┌─────────────┐   ┌─────────────────┐  │  │
│   │   Health)   │     │  │ /generate   │   │ /export         │  │  │
│   └─────────────┘     │  │  • /section  │   │  • /docx        │  │  │
│                       │  │  • /refine   │   │                 │  │  │
│   ┌─────────────┐     │  └──────┬──────┘   └────────┬────────┘  │  │
│   │  config.py  │     └─────────┼──────────────────┼────────────┘  │
│   │  (Settings) │               │                  │               │
│   └─────────────┘               ▼                  ▼               │
│                       ┌─────────────────┐  ┌────────────────┐      │
│                       │ gemini_service   │  │ docx_service   │      │
│                       │ (Gemini 2.5 API)│  │ (python-docx)  │      │
│                       └────────┬────────┘  └────────────────┘      │
│                                │                                    │
└────────────────────────────────┼────────────────────────────────────┘
                                 │  HTTPS
                                 ▼
                    ┌─────────────────────────┐
                    │   Google Gemini API      │
                    │   (gemini-2.5-flash)     │
                    └─────────────────────────┘
```

---

## 📁 Project Structure

```text
VairamDocx AI/
│
├── frontend/                        # React + Vite + TypeScript Frontend
│   ├── components/
│   │   └── ReportPreview.tsx        # Live IEEE-formatted report preview component
│   ├── services/
│   │   └── geminiService.ts         # API client — generate, refine, export calls
│   ├── App.tsx                      # Main app — Landing page, Editor, Preview
│   ├── types.ts                     # TypeScript interfaces & default constants
│   ├── index.html                   # HTML entry point with Tailwind CDN config
│   ├── index.tsx                    # React DOM render entry
│   ├── vite.config.ts              # Vite dev server & API proxy configuration
│   ├── tsconfig.json               # TypeScript compiler configuration
│   ├── package.json                # Frontend dependencies & scripts
│   └── .env.local                  # Frontend environment variables (if any)
│
├── backend/                         # FastAPI + Python Backend
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                 # FastAPI app entry — CORS, routers, health check
│   │   ├── config.py               # Pydantic settings — loads .env variables
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   └── schemas.py          # Pydantic models — ReportData, FormattingOptions, etc.
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   ├── generate.py         # POST /api/generate/section & /api/generate/refine
│   │   │   └── export.py           # POST /api/export/docx
│   │   └── services/
│   │       ├── __init__.py
│   │       ├── gemini_service.py   # Gemini AI client — section generation & text refinement
│   │       └── docx_service.py     # DOCX builder — IEEE-formatted Word document creation
│   ├── requirements.txt            # Python dependencies
│   ├── .env                        # Environment variables (GEMINI_API_KEY)
│   └── venv/                       # Python virtual environment (git-ignored)
│
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

---

## ⚙️ Getting Started

Follow these instructions to set up the project locally for development.

### Prerequisites

| Requirement | Minimum Version | Link |
|---|---|---|
| **Node.js** | v18+ | [Download](https://nodejs.org) |
| **Python** | v3.10+ | [Download](https://python.org) |
| **Git** | Latest | [Download](https://git-scm.com) |
| **Gemini API Key** | — | [Get one free](https://aistudio.google.com/apikey) |

### 1. Clone the Repository

```bash
git clone https://github.com/ajayvairam/VairamDocs-AI-AI-Based-IEEE-Project-Report-Generator.git
cd VairamDocs-AI-AI-Based-IEEE-Project-Report-Generator
```

### 2. Backend Setup

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv

# On Windows:
.\venv\Scripts\activate

# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

Create a `.env` file in the `backend/` directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the FastAPI development server:

```bash
uvicorn app.main:app --reload --port 8000
```

> The backend will be available at `http://localhost:8000`  
> Interactive API docs at `http://localhost:8000/docs` (Swagger UI)  
> Alternative API docs at `http://localhost:8000/redoc` (ReDoc)

### 3. Frontend Setup

Open a **new terminal window** and navigate to the `frontend/` directory:

```bash
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

> The frontend will be available at `http://localhost:3000`  
> Vite is configured to proxy all `/api/*` requests to the backend at `:8000`.

### 4. Open the App

Navigate to **http://localhost:3000** in your browser. You should see the VairamDocs AI landing page. Click **"Start Creating Now"** to begin building your report!

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

| Variable | Required | Default | Description |
|---|---|---|---|
| `GEMINI_API_KEY` | ✅ Yes | `""` | Your Google Gemini API key from [AI Studio](https://aistudio.google.com/apikey) |
| `GEMINI_MODEL` | ❌ No | `gemini-2.5-flash` | The Gemini model to use for content generation |

### CORS Configuration

The backend automatically allows requests from the following origins (configurable in `config.py`):

```
http://localhost:3000
http://127.0.0.1:3000
http://localhost:5173
http://127.0.0.1:5173
```

---

## 📡 API Reference

The FastAPI backend exposes the following REST endpoints:

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Root health check |
| `GET` | `/api/health` | API health check |

**Response:**
```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

---

### AI Content Generation

#### `POST /api/generate/section`

Generate AI-drafted content for a specific report section.

**Request Body:**
```json
{
  "section": "methodology",
  "reportData": {
    "title": "AI-Driven Automation in Manufacturing",
    "keywords": "AI, Manufacturing, CNN",
    "methodology": ""
  },
  "instructions": "Focus on CNN-based defect detection"
}
```

**Response:**
```json
{
  "content": "The proposed system utilizes a Convolutional Neural Network (CNN)..."
}
```

**Supported Sections:** `abstract`, `keywords`, `introduction`, `problemStatement`, `objectives`, `literatureReview`, `methodology`, `results`, `conclusion`, `futureScope`, `references`

---

#### `POST /api/generate/refine`

Refine existing text to meet IEEE academic standards — fixes grammar, improves flow, and enforces formal tone.

**Request Body:**
```json
{
  "text": "we made a system that finds defects using ai and it works good"
}
```

**Response:**
```json
{
  "content": "A defect detection system was developed utilizing artificial intelligence techniques, demonstrating satisfactory performance metrics..."
}
```

---

### DOCX Export

#### `POST /api/export/docx`

Generate and download an IEEE-formatted Word document.

**Request Body:**
```json
{
  "reportData": { ... },
  "formatting": {
    "paperSize": "A4",
    "fontSize": "10pt",
    "lineSpacing": "1",
    "marginType": "IEEE",
    "marginTop": 1.9,
    "marginBottom": 2.54,
    "marginLeft": 1.9,
    "marginRight": 1.9,
    "columns": 2
  }
}
```

**Response:** Binary `.docx` file stream (`Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document`)

---

## 💡 Usage Guide

### Step-by-Step Workflow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  1. Enter    │────▶│  2. Generate  │────▶│  3. Refine   │────▶│  4. Export   │
│  Details     │     │  with AI      │     │  & Review    │     │  DOCX        │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

1. **Enter Project Details** — Start by expanding the "Project & Team Details" section. Enter your project title, add team members (name + register number), department, college name, and guide name.

2. **Draft Content with AI** — For each section (Abstract, Introduction, Methodology, etc.), click the **"Generate Draft"** button (✨). The AI uses your project title and keywords as context to write academically appropriate content.

3. **Refine Your Text** — If you prefer to write your own content, use the **"Refine"** button (🔄) to polish grammar, fix tone, and ensure formal academic style automatically.

4. **Upload Architecture Diagram** — In the Methodology section, upload a flowchart or system architecture image. It will be embedded as `Fig. 1` in the final document.

5. **Customize Formatting** — Adjust paper size (A4/Letter), font size (10pt/11pt/12pt), columns (1 or 2), and line spacing from the Formatting Options panel.

6. **Live Preview** — On desktop, the right panel shows a real-time IEEE-formatted preview. On mobile, switch to the "Preview" tab.

7. **Export** — Click **"Download DOCX Report"** to generate and download the final Word document with all IEEE formatting applied server-side.

---

## 📐 IEEE Formatting Details

The exported DOCX follows the **IEEE Conference Paper Template** specifications:

| Property | Value |
|---|---|
| **Paper Size** | A4 (210mm × 297mm) or US Letter |
| **Body Font** | Times New Roman, 10pt |
| **Title Font** | Times New Roman, 24pt, Bold, Centered |
| **Author Font** | Times New Roman, 11pt, Bold, Centered |
| **Section Headings** | Uppercase, Centered, Bold, Roman Numeral Numbering |
| **Abstract Format** | Bold + Italic prefix ("Abstract—"), 9pt |
| **Keywords Format** | Bold + Italic prefix ("Keywords—"), 9pt |
| **References Font** | Times New Roman, 8pt |
| **Column Layout** | Two-column with 0.75cm gap |
| **Margins (Top)** | 1.9 cm |
| **Margins (Bottom)** | 2.54 cm |
| **Margins (Left/Right)** | 1.9 cm |
| **Line Spacing** | Single (1.0) |
| **Text Alignment** | Justified |
| **Figure Captions** | Bold + Italic, 8pt, Centered below figure |

### Document Section Order

```
1.  Title (full-width, centered)
2.  Author Block (names, register numbers, department, college)
3.  Guide Information
    ── Column break (switches to dual-column) ──
4.  Abstract
5.  Keywords
6.  I.   Introduction
7.  II.  Problem Statement
8.  III. Objectives
9.  IV.  Literature Review
10. V.   Methodology (+ Fig. 1 if uploaded)
11. VI.  Results
12. VII. Conclusion
13. VIII.Future Scope
14. References
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "feat: add amazing feature"
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style and patterns
- Add docstrings to all Python functions
- Use TypeScript types for all frontend code
- Test API endpoints via Swagger UI at `/docs` before submitting

---

## 🔧 Troubleshooting

<details>
<summary><strong>❌ "GEMINI_API_KEY is not set" error</strong></summary>

Ensure the `.env` file exists in the `backend/` directory (not the project root) and contains:
```env
GEMINI_API_KEY=your_actual_key_here
```
Restart the backend server after making changes.
</details>

<details>
<summary><strong>❌ CORS errors in the browser console</strong></summary>

Make sure the backend is running on port `8000` and the frontend on port `3000`. The Vite proxy in `vite.config.ts` forwards `/api/*` requests to the backend.
</details>

<details>
<summary><strong>❌ "Failed to generate DOCX" alert</strong></summary>

This usually means the backend server isn't running. Start it with:
```bash
cd backend
.\venv\Scripts\activate   # Windows
uvicorn app.main:app --reload --port 8000
```
</details>

<details>
<summary><strong>❌ Frontend shows blank page</strong></summary>

Run `npm install` in the `frontend/` directory to install all dependencies, then restart with `npm run dev`.
</details>

<details>
<summary><strong>❌ python-docx import error</strong></summary>

Make sure your virtual environment is activated and all dependencies are installed:
```bash
pip install -r requirements.txt
```
</details>

---

## 📝 License

© 2026 **AJAY VAIRAM T** — **VAIRAM GROUP**. All Rights Reserved.

This project is proprietary software. Unauthorized copying, modification, distribution, or use of this software, in whole or in part, is strictly prohibited without prior written consent from the author.

---

<div align="center">

**Built with ❤️ by [Ajay Vairam](https://github.com/ajayvairam)**

*Where Student Reports Shine Like a Diamond* 💎

</div>
