/*
  Warnings:

  - You are about to drop the `DayMaterial` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DayMaterial";

-- CreateTable
CREATE TABLE "day_material" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "day_material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "day_material_result" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "dayMaterialId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "mistakes" INTEGER NOT NULL,
    "totalQuestions" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "day_material_result_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "day_material_date_key" ON "day_material"("date");

-- CreateIndex
CREATE INDEX "day_material_result_userId_idx" ON "day_material_result"("userId");

-- CreateIndex
CREATE INDEX "day_material_result_dayMaterialId_idx" ON "day_material_result"("dayMaterialId");
