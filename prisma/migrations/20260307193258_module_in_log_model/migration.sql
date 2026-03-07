/*
  Warnings:

  - Added the required column `module` to the `AILog` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Module" AS ENUM ('CATEGORY_AND_TAG_GENERATION');

-- AlterTable
ALTER TABLE "AILog" ADD COLUMN     "module" "Module" NOT NULL;
