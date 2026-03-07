/*
  Warnings:

  - You are about to drop the column `productAIDataId` on the `AILog` table. All the data in the column will be lost.
  - You are about to drop the `ProductAIData` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `AILog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AILog" DROP CONSTRAINT "AILog_productAIDataId_fkey";

-- AlterTable
ALTER TABLE "AILog" DROP COLUMN "productAIDataId",
ADD COLUMN     "productId" TEXT NOT NULL;

-- DropTable
DROP TABLE "ProductAIData";

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "primaryCategory" TEXT NOT NULL,
    "secondaryCategories" TEXT[],
    "seoTags" TEXT[],
    "sustainabilityFilters" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AILog" ADD CONSTRAINT "AILog_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
