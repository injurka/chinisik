/*
  Warnings:

  - A unique constraint covering the columns `[index]` on the table `hieroglyph_key` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "hieroglyph_key_index_key" ON "hieroglyph_key"("index");
