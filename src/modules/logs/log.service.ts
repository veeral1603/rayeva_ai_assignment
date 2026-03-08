import { prisma } from "@/lib/prisma";
import { categoryAndTagsResponse } from "@/types";

export async function createLog(
  prompt: string,
  response: categoryAndTagsResponse,
  productId: string,
) {
  const log = await prisma.aILog.create({
    data: {
      module: "CATEGORY_AND_TAG_GENERATION",
      prompt,
      response: JSON.stringify(response),
      productId,
    },
  });

  return log;
}

export async function getAllCategoryAndTagLogs() {
  const logs = await prisma.aILog.findMany({
    where: { module: "CATEGORY_AND_TAG_GENERATION" },
    include: { product: true },
    orderBy: { createdAt: "desc" },
  });

  return logs;
}
