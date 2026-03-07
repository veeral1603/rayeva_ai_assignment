import axiosInstance from "@/lib/axios";
import { CategoryFormValues } from "@/lib/validators/categoryFormSchema";

export const generateCategoriesAndTags = async (data: CategoryFormValues) => {
  const response = axiosInstance.post("/ai/generate-categories", data);
  return response;
};
