import { prisma } from "@/lib/prisma";
import { CategoryFormValues } from "@/lib/validators/categoryFormSchema";
import { categoryAndTagsResponse } from "@/types";

export async function createProduct(
  validatedBody: CategoryFormValues,
  aiData: categoryAndTagsResponse,
) {
  const { title, description } = validatedBody;
  const product = await prisma.product.create({
    data: {
      title,
      description,
      primaryCategory: aiData.primary_category,
      subCategory: aiData.sub_category,
      seoTags: aiData.seo_tags,
      sustainabilityFilters: aiData.sustainability_filters,
    },
  });
  return product;
}

export async function getAllProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
}

export async function deleteProduct(productId: string) {
  await prisma.aILog.deleteMany({ where: { productId } });

  const deletedProduct = await prisma.product.delete({
    where: { id: productId },
  });
  return deletedProduct;
}
