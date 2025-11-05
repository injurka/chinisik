-- CreateTable
CREATE TABLE "hieroglyph_hsk" (
    "id" SERIAL NOT NULL,
    "glyph" TEXT NOT NULL,
    "traditionalGlyph" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "translation" JSONB NOT NULL,
    "pinyin" JSONB NOT NULL,

    CONSTRAINT "hieroglyph_hsk_pkey" PRIMARY KEY ("id")
);
