import axiosInstance from "@/lib/axios";

export const getAllProducts = async () => {
  const response = await axiosInstance.get("/api/products");
  return response.data.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await axiosInstance.delete(`/api/products/${productId}`);
  return response.data;
};
