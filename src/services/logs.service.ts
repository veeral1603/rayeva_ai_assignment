import axiosInstance from "@/lib/axios";

export const getAllCategoryAndTagLogs = async () => {
  const response = await axiosInstance.get("/ai/generate-categories/logs");
  return response.data.data;
};
