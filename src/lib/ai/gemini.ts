import ai from "./geminiClient";
import { buildCategoryAndTagsPrompt } from "./prompt";

async function generateCategoriesAndTagsFromGemini(
  title: string,
  description: string,
) {
  const prompt = buildCategoryAndTagsPrompt(title, description);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction:
        "You are an AI assistant for an eco-commerce platform.",
      responseMimeType: "application/json",
    },
  });

  return JSON.parse(response.text || "{}");
}

const gemini = {
  generateCategoriesAndTagsFromGemini,
};

export default gemini;
