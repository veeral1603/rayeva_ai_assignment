import axiosInstance from "@/lib/axios";
import { CategoryFormValues } from "@/lib/validators/categoryFormSchema";
import { categoryAndTagsResponse } from "@/types";

export const generateCategoriesAndTags = async (
  data: CategoryFormValues,
): Promise<categoryAndTagsResponse> => {
  const response = await axiosInstance.post("/ai/generate-categories", data);
  return response.data.data;
};
