/*
  Warnings:

  - You are about to drop the column `toneIndex` on the `hieroglyph_key` table. All the data in the column will be lost.
  - You are about to drop the column `toneType` on the `hieroglyph_key` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hieroglyph_key" DROP COLUMN "toneIndex",
DROP COLUMN "toneType";
