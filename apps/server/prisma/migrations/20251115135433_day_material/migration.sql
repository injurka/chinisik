-- CreateTable
CREATE TABLE "DayMaterial" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "content" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DayMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DayMaterial_date_key" ON "DayMaterial"("date");
