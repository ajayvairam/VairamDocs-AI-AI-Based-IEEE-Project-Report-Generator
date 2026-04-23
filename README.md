<div align="center">

# 💎 VairamDocx AI
**Where Student Reports Shine Like a Diamond**

An AI-powered web application that automates the generation and formatting of academic project reports according to strict IEEE conference standards.

</div>

---

## 🚀 Overview

Writing academic project reports can be tedious, especially when dealing with complex formatting rules. **VairamDocx AI** solves this by combining the power of **Google's Gemini 2.5 Flash AI** with automated **DOCX document generation**. 

Simply provide your project details, team members, and basic pointers, and the AI will draft professional academic content (Abstract, Introduction, Methodology, etc.). Once reviewed, export the entire report as a perfectly formatted, double-column IEEE-standard DOCX file—ready for submission.

## ✨ Key Features

- **🤖 AI Content Generation**: Instantly draft complex sections like Literature Review, Methodology, and Future Scope using context-aware AI.
- **✍️ Professional Refinement**: A built-in "Refine" tool that acts as an academic editor, fixing grammar and elevating the tone of your text to meet IEEE standards.
- **📐 IEEE Standard Formatting**: Forget about margins and font sizes. The system automatically applies dual-column layouts, proper heading hierarchy, and Times New Roman standard sizing.
- **📄 Native DOCX Export**: Server-side document generation using `python-docx` ensures flawless MS Word files that are fully editable.
- **👥 Team Collaboration Ready**: Easily include team members, register numbers, guide names, and institutional details.
- **📊 Visual Flowcharts**: Support for inserting base64 system architecture diagrams directly into the final document.
- **🔒 Secure Architecture**: The Gemini API key is securely managed in the Python backend, keeping it safe from client-side exposure.

---

## 🛠️ Tech Stack

This project uses a modern monorepo architecture divided into a React frontend and a FastAPI backend.

### Frontend
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS for a premium, glassmorphism-inspired dark mode UI
- **Icons**: Lucide React
- **API Communication**: Native `fetch` API for backend communication

### Backend
- **Framework**: FastAPI + Uvicorn (Python 3.11+)
- **AI Integration**: Official `google-genai` SDK
- **Document Generation**: `python-docx`
- **Data Validation**: Pydantic

---

## 📁 Project Structure

```text
VairamDocx AI/
├── frontend/               # React + Vite Frontend
│   ├── components/         # Reusable UI components
│   ├── services/           # API integration services
│   ├── App.tsx             # Main application logic
│   └── ...
├── backend/                # FastAPI Backend
│   ├── app/
│   │   ├── models/         # Pydantic schemas
│   │   ├── routers/        # API endpoints (generate, export)
│   │   └── services/       # Gemini AI and DOCX logic
│   ├── main.py             # Server entry point
│   └── ...
└── README.md               # Project documentation
```

---

## ⚙️ Getting Started

Follow these instructions to set up the project locally for development.

### Prerequisites
- **Node.js** (v18 or higher)
- **Python** (v3.10 or higher)
- **Git**
- A **Google Gemini API Key** (Get one from [Google AI Studio](https://aistudio.google.com/))

### 1. Clone the Repository
```bash
git clone https://github.com/ajayvairam/VairamDocs-AI-AI-Based-IEEE-Project-Report-Generator.git
cd VairamDocs-AI-AI-Based-IEEE-Project-Report-Generator
```

### 2. Backend Setup
Navigate to the `backend` directory, set up a virtual environment, and install the dependencies.

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

Create a `.env` file in the `backend` directory and add your Gemini API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Start the FastAPI server:
```bash
uvicorn app.main:app --reload --port 8000
```
*The backend will run on `http://localhost:8000`. You can view the API documentation at `http://localhost:8000/docs`.*

### 3. Frontend Setup
Open a new terminal window, navigate to the `frontend` directory, and install the dependencies.

```bash
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```
*The frontend will run on `http://localhost:3000`. Vite is configured to proxy API requests to the backend.*

---

## 💡 Usage Guide

1. **Enter Project Details**: Start by entering your project title, college name, guide details, and team members.
2. **Draft Content**: Use the **Generate Draft** button next to any section (e.g., Abstract, Methodology) to have the AI write the initial content based on your project details.
3. **Refine Text**: If you write your own content, use the **Refine** button to polish the grammar and enforce a formal academic tone.
4. **Upload Architecture**: Upload a flowchart or architecture diagram image to be included in the Methodology section.
5. **Preview**: Switch to the **Preview** tab (on mobile) or view the live preview panel (on desktop) to see how the content looks.
6. **Export**: Click the **Download DOCX Report** button. The backend will compile the data and instantly download a strictly formatted IEEE Word document.

---

## 📝 License

© 2026 AJAY VAIRAM T - VAIRAM GROUP. All Rights Reserved.
