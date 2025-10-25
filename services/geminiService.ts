
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const improveText = async (text: string, fieldName: string): Promise<string> => {
  if (!API_KEY) {
    return "Error: API Key is not configured. Please set the API_KEY environment variable.";
  }
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
