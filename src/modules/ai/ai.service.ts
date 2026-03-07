import gemini from "@/lib/ai/gemini";
import { CategoryFormValues } from "@/lib/validators/categoryFormSchema";
import { categoryAndTagsResponse } from "@/types";

export const generateProductCategoriesAndTags = async (
  validatedBody: CategoryFormValues,
): Promise<categoryAndTagsResponse> => {
  const { title, description } = validatedBody;

  const response = await gemini.generateCategoriesAndTagsFromGemini(
    title,
    description,
  );

  // const response = {
  //   categories: ["Category 1", "Category 2", "Category 3"],
  //   tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
  // };

  return response;
};
