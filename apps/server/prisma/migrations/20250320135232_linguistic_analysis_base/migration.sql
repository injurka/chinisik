/*
  Warnings:

  - You are about to drop the `linguistic_nalysis_all` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "LinguisticAnalysisDataType" AS ENUM ('Markdown', 'Json');

-- DropTable
DROP TABLE "linguistic_nalysis_all";

-- CreateTable
CREATE TABLE "linguistic_analysis_base" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "sourceValue" TEXT NOT NULL,
    "glyph" TEXT NOT NULL,
    "totalTokens" INTEGER NOT NULL,
    "generationDuration" INTEGER NOT NULL,
    "dataType" "LinguisticAnalysisDataType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "linguistic_analysis_base_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "linguistic_analysis_json" (
    "id" INTEGER NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "linguistic_analysis_json_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "linguistic_analysis_markdown" (
    "id" INTEGER NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "linguistic_analysis_markdown_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "linguistic_analysis_base_id_key" ON "linguistic_analysis_base"("id");

-- CreateIndex
CREATE INDEX "linguistic_analysis_base_userId_idx" ON "linguistic_analysis_base"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "linguistic_analysis_json_id_key" ON "linguistic_analysis_json"("id");

-- CreateIndex
CREATE UNIQUE INDEX "linguistic_analysis_markdown_id_key" ON "linguistic_analysis_markdown"("id");
