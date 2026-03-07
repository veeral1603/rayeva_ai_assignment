-- CreateTable
CREATE TABLE "ProductAIData" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "primaryCategory" TEXT NOT NULL,
    "secondaryCategories" TEXT[],
    "seoTags" TEXT[],
    "sustainabilityFilters" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductAIData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AILog" (
    "id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "productAIDataId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AILog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AILog" ADD CONSTRAINT "AILog_productAIDataId_fkey" FOREIGN KEY ("productAIDataId") REFERENCES "ProductAIData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
