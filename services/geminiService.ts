
import { GoogleGenAI } from "@google/genai";

const API_KEY = "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";

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const improveText = async (text: string, fieldName: string): Promise<string> => {
  if (!text.trim()) {
    return text; // Return original text if empty
  }
  
  const prompt = `You are a professional resume writer. Rewrite the following text for a CV's "${fieldName}" section to be more professional, concise, and impactful. Return only the rewritten text in plain text, without any markdown, introductory phrases, or explanations.\n\nOriginal text:\n"${text}"`;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error improving text with Gemini:", error);
    // Return original text on error to not lose user's input
    return `Error: Could not improve text. Original text: ${text}`;
  }
};
