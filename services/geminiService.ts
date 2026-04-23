import { ReportData } from '../types';

const API_BASE = '/api';

export const generateSectionContent = async (
  section: keyof ReportData,
  currentData: ReportData,
  instructions?: string
): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE}/generate/section`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        section,
        reportData: currentData,
        instructions: instructions || null,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
      throw new Error(error.detail || `HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};

export const refineText = async (text: string): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE}/generate/refine`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
      throw new Error(error.detail || `HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error("Error refining text:", error);
    throw error;
  }
};

/**
 * Export report as DOCX via the backend.
 * Returns a Blob of the generated DOCX file.
 */
export const exportDocx = async (
  reportData: ReportData,
  formatting: any
): Promise<Blob> => {
  const response = await fetch(`${API_BASE}/export/docx`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reportData, formatting }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `Failed to export DOCX`);
  }

  return response.blob();
};