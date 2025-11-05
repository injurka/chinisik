/*
  Warnings:

  - Changed the type of `translate` on the `SplitGlyphsHieroglyph` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pinyin` on the `SplitGlyphsSentence` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `pinyin` on the `SplitGlyphsWord` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `data` on the `split_glyphs_all` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SplitGlyphsHieroglyph" DROP COLUMN "translate",
ADD COLUMN     "translate" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "SplitGlyphsSentence" DROP COLUMN "pinyin",
ADD COLUMN     "pinyin" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "SplitGlyphsWord" DROP COLUMN "pinyin",
ADD COLUMN     "pinyin" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "split_glyphs_all" DROP COLUMN "data",
ADD COLUMN     "data" JSONB NOT NULL;
