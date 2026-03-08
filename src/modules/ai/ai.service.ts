import gemini from "@/lib/ai/gemini";
import { CategoryFormValues } from "@/validators/categoryFormSchema";
import { categoryAndTagsResponse } from "@/types";

export const generateProductCategoriesAndTags = async (
  validatedBody: CategoryFormValues,
): Promise<{ response: categoryAndTagsResponse; prompt: string }> => {
  const { title, description } = validatedBody;

  const response = await gemini.generateCategoriesAndTagsFromGemini(
    title,
    description,
  );

  return response;
};
