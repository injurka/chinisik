-- CreateTable
CREATE TABLE "linguistic_nalysis_all" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "sourceValue" TEXT NOT NULL,
    "glyph" TEXT NOT NULL,
    "totalTokens" INTEGER NOT NULL,
    "generationDuration" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "linguistic_nalysis_all_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "linguistic_nalysis_all_id_key" ON "linguistic_nalysis_all"("id");

-- CreateIndex
CREATE INDEX "linguistic_nalysis_all_userId_idx" ON "linguistic_nalysis_all"("userId");
