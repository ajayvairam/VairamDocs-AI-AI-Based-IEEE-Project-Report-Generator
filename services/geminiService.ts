import { GoogleGenAI } from "@google/genai";
import { ReportData } from '../types';

let genAI: GoogleGenAI | null = null;

const getGenAI = (): GoogleGenAI => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key is missing. Please set process.env.API_KEY.");
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
};

export const generateSectionContent = async (
  section: keyof ReportData,
  currentData: ReportData,
  instructions?: string
): Promise<string> => {
  try {
    const ai = getGenAI();
    const model = 'gemini-2.5-flash';

    const prompt = `
      You are an expert academic writing assistant helping a student write an IEEE project report.
      
      Project Details:
      Title: ${currentData.title}
      Keywords: ${currentData.keywords}
      
      Task: Write or improve the "${section}" section of the report.
      
      Existing content provided by user (if any): "${currentData[section]}"
      
      User Instructions: ${instructions || "Draft a professional, academic version of this section adhering to IEEE style tone (formal, objective, concise)."}
      
      Requirements:
      - Use formal academic English.
      - Be concise but thorough.
      - If it is the 'References' section, format them strictly in IEEE citation style.
      - If it is 'Objectives', use a numbered list format if appropriate.
      - Do not include markdown formatting like **bold** or # headings unless strictly necessary for structure within the section. Plain text is preferred.
      
      Output ONLY the content for this section.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};

export const refineText = async (text: string): Promise<string> => {
   try {
    const ai = getGenAI();
    const model = 'gemini-2.5-flash';

    const prompt = `
      Refine the following text to meet IEEE academic standards. Fix grammar, improve flow, and ensure a formal tone.
      
      Text: "${text}"
      
      Output ONLY the refined text.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error refining text:", error);
    throw error;
  }
}