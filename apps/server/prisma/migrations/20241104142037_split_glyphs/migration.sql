-- CreateTable
CREATE TABLE "split_glyphs_all" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "glyph" TEXT NOT NULL,
    "data" JSONB[],

    CONSTRAINT "split_glyphs_all_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SplitGlyphsHieroglyph" (
    "id" SERIAL NOT NULL,
    "glyph" TEXT NOT NULL,
    "pinyin" TEXT NOT NULL,
    "toneType" INTEGER NOT NULL,
    "toneIndex" INTEGER NOT NULL,
    "transcription" TEXT NOT NULL,
    "translate" JSONB[],

    CONSTRAINT "SplitGlyphsHieroglyph_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SplitGlyphsHieroglyphKeys" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "hieroglyphId" INTEGER NOT NULL,
    "keyId" INTEGER NOT NULL,

    CONSTRAINT "SplitGlyphsHieroglyphKeys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SplitGlyphsWord" (
    "id" SERIAL NOT NULL,
    "glyph" TEXT NOT NULL,
    "translate" TEXT NOT NULL,
    "transcription" TEXT NOT NULL,
    "pinyin" JSONB[],

    CONSTRAINT "SplitGlyphsWord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SplitGlyphsWordHieroglyphs" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "hieroglyphId" INTEGER NOT NULL,
    "wordId" INTEGER NOT NULL,

    CONSTRAINT "SplitGlyphsWordHieroglyphs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SplitGlyphsSentence" (
    "id" SERIAL NOT NULL,
    "glyph" TEXT NOT NULL,
    "translate" TEXT NOT NULL,
    "transcription" TEXT NOT NULL,
    "pinyin" JSONB[],

    CONSTRAINT "SplitGlyphsSentence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SplitGlyphsSentenceWords" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "sentenceId" INTEGER NOT NULL,
    "wordId" INTEGER NOT NULL,

    CONSTRAINT "SplitGlyphsSentenceWords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SplitGlyphsSentenceHieroglyphs" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "sentenceId" INTEGER NOT NULL,
    "hieroglyphId" INTEGER NOT NULL,

    CONSTRAINT "SplitGlyphsSentenceHieroglyphs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "split_glyphs_all_id_key" ON "split_glyphs_all"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SplitGlyphsHieroglyph_id_key" ON "SplitGlyphsHieroglyph"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SplitGlyphsHieroglyph_glyph_key" ON "SplitGlyphsHieroglyph"("glyph");

-- CreateIndex
CREATE UNIQUE INDEX "SplitGlyphsHieroglyphKeys_id_key" ON "SplitGlyphsHieroglyphKeys"("id");

-- CreateIndex
CREATE INDEX "SplitGlyphsHieroglyphKeys_hieroglyphId_idx" ON "SplitGlyphsHieroglyphKeys"("hieroglyphId");

-- CreateIndex
CREATE UNIQUE INDEX "SplitGlyphsWord_id_key" ON "SplitGlyphsWord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SplitGlyphsWord_glyph_key" ON "SplitGlyphsWord"("glyph");

-- CreateIndex
CREATE UNIQUE INDEX "SplitGlyphsWordHieroglyphs_id_key" ON "SplitGlyphsWordHieroglyphs"("id");

-- CreateIndex
CREATE INDEX "SplitGlyphsWordHieroglyphs_hieroglyphId_idx" ON "SplitGlyphsWordHieroglyphs"("hieroglyphId");

-- CreateIndex
CREATE INDEX "SplitGlyphsWordHieroglyphs_wordId_idx" ON "SplitGlyphsWordHieroglyphs"("wordId");

-- CreateIndex
CREATE UNIQUE INDEX "SplitGlyphsSentence_id_key" ON "SplitGlyphsSentence"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SplitGlyphsSentence_glyph_key" ON "SplitGlyphsSentence"("glyph");

-- CreateIndex
CREATE UNIQUE INDEX "SplitGlyphsSentenceWords_id_key" ON "SplitGlyphsSentenceWords"("id");

-- CreateIndex
CREATE INDEX "SplitGlyphsSentenceWords_sentenceId_idx" ON "SplitGlyphsSentenceWords"("sentenceId");

-- CreateIndex
CREATE INDEX "SplitGlyphsSentenceWords_wordId_idx" ON "SplitGlyphsSentenceWords"("wordId");

-- CreateIndex
CREATE UNIQUE INDEX "SplitGlyphsSentenceHieroglyphs_id_key" ON "SplitGlyphsSentenceHieroglyphs"("id");

-- CreateIndex
CREATE INDEX "SplitGlyphsSentenceHieroglyphs_sentenceId_idx" ON "SplitGlyphsSentenceHieroglyphs"("sentenceId");

-- CreateIndex
CREATE INDEX "SplitGlyphsSentenceHieroglyphs_hieroglyphId_idx" ON "SplitGlyphsSentenceHieroglyphs"("hieroglyphId");
