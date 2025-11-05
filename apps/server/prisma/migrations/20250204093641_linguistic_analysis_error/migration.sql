-- CreateTable
CREATE TABLE "linguistic_nalysis_error" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "model" TEXT NOT NULL,
    "sourceValue" TEXT NOT NULL,
    "error" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "linguistic_nalysis_error_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "linguistic_nalysis_error_id_key" ON "linguistic_nalysis_error"("id");

-- CreateIndex
CREATE INDEX "linguistic_nalysis_error_userId_idx" ON "linguistic_nalysis_error"("userId");
