/*
  Warnings:

  - You are about to drop the `SplitGlyphsHieroglyph` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SplitGlyphsHieroglyphKeys` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SplitGlyphsSentence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SplitGlyphsSentenceHieroglyphs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SplitGlyphsSentenceWords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SplitGlyphsWord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SplitGlyphsWordHieroglyphs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SplitGlyphsHieroglyph";

-- DropTable
DROP TABLE "SplitGlyphsHieroglyphKeys";

-- DropTable
DROP TABLE "SplitGlyphsSentence";

-- DropTable
DROP TABLE "SplitGlyphsSentenceHieroglyphs";

-- DropTable
DROP TABLE "SplitGlyphsSentenceWords";

-- DropTable
DROP TABLE "SplitGlyphsWord";

-- DropTable
DROP TABLE "SplitGlyphsWordHieroglyphs";

-- CreateTable
CREATE TABLE "split_glyphs_hieroglyph" (
    "id" SERIAL NOT NULL,
    "glyph" TEXT NOT NULL,
    "pinyin" TEXT NOT NULL,
    "toneType" INTEGER NOT NULL,
    "toneIndex" INTEGER NOT NULL,
    "transcription" TEXT NOT NULL,
    "translate" JSONB NOT NULL,

    CONSTRAINT "split_glyphs_hieroglyph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "split_glyphs_keys" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "hieroglyphId" INTEGER NOT NULL,
    "keyId" INTEGER NOT NULL,

    CONSTRAINT "split_glyphs_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "split_glyphs_word" (
    "id" SERIAL NOT NULL,
    "glyph" TEXT NOT NULL,
    "translate" TEXT NOT NULL,
    "transcription" TEXT NOT NULL,
    "pinyin" JSONB NOT NULL,

    CONSTRAINT "split_glyphs_word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "split_glyphs_word_hieroglyph" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "hieroglyphId" INTEGER NOT NULL,
    "wordId" INTEGER NOT NULL,

    CONSTRAINT "split_glyphs_word_hieroglyph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "split_glyphs_sentence" (
    "id" SERIAL NOT NULL,
    "glyph" TEXT NOT NULL,
    "translate" TEXT NOT NULL,
    "transcription" TEXT NOT NULL,
    "pinyin" JSONB NOT NULL,

    CONSTRAINT "split_glyphs_sentence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "split_glyphs_words" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "sentenceId" INTEGER NOT NULL,
    "wordId" INTEGER NOT NULL,

    CONSTRAINT "split_glyphs_words_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "split_glyphs_sentence_hieroglyphs" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "sentenceId" INTEGER NOT NULL,
    "hieroglyphId" INTEGER NOT NULL,

    CONSTRAINT "split_glyphs_sentence_hieroglyphs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pinyin_final" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pos" INTEGER NOT NULL,

    CONSTRAINT "pinyin_final_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pinyin_initial" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pos" INTEGER NOT NULL,

    CONSTRAINT "pinyin_initial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pinyin_finals_tone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "toneType" INTEGER NOT NULL,
    "finalId" INTEGER NOT NULL,

    CONSTRAINT "pinyin_finals_tone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pinyin_initial_finals" (
    "id" SERIAL NOT NULL,
    "initialId" INTEGER,
    "finalToneId" INTEGER NOT NULL,

    CONSTRAINT "pinyin_initial_finals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_hieroglyph_id_key" ON "split_glyphs_hieroglyph"("id");

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_hieroglyph_glyph_key" ON "split_glyphs_hieroglyph"("glyph");

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_keys_id_key" ON "split_glyphs_keys"("id");

-- CreateIndex
CREATE INDEX "split_glyphs_keys_hieroglyphId_idx" ON "split_glyphs_keys"("hieroglyphId");

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_word_id_key" ON "split_glyphs_word"("id");

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_word_glyph_key" ON "split_glyphs_word"("glyph");

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_word_hieroglyph_id_key" ON "split_glyphs_word_hieroglyph"("id");

-- CreateIndex
CREATE INDEX "split_glyphs_word_hieroglyph_hieroglyphId_idx" ON "split_glyphs_word_hieroglyph"("hieroglyphId");

-- CreateIndex
CREATE INDEX "split_glyphs_word_hieroglyph_wordId_idx" ON "split_glyphs_word_hieroglyph"("wordId");

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_sentence_id_key" ON "split_glyphs_sentence"("id");

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_sentence_glyph_key" ON "split_glyphs_sentence"("glyph");

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_words_id_key" ON "split_glyphs_words"("id");

-- CreateIndex
CREATE INDEX "split_glyphs_words_sentenceId_idx" ON "split_glyphs_words"("sentenceId");

-- CreateIndex
CREATE INDEX "split_glyphs_words_wordId_idx" ON "split_glyphs_words"("wordId");

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_sentence_hieroglyphs_id_key" ON "split_glyphs_sentence_hieroglyphs"("id");

-- CreateIndex
CREATE INDEX "split_glyphs_sentence_hieroglyphs_sentenceId_idx" ON "split_glyphs_sentence_hieroglyphs"("sentenceId");

-- CreateIndex
CREATE INDEX "split_glyphs_sentence_hieroglyphs_hieroglyphId_idx" ON "split_glyphs_sentence_hieroglyphs"("hieroglyphId");

-- CreateIndex
CREATE INDEX "pinyin_finals_tone_finalId_idx" ON "pinyin_finals_tone"("finalId");

-- CreateIndex
CREATE INDEX "pinyin_initial_finals_finalToneId_idx" ON "pinyin_initial_finals"("finalToneId");

-- CreateIndex
CREATE INDEX "pinyin_initial_finals_initialId_idx" ON "pinyin_initial_finals"("initialId");
