-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('AiGenerate');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_permission" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "permission" "Permission" NOT NULL,

    CONSTRAINT "user_permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hieroglyph_key" (
    "id" SERIAL NOT NULL,
    "index" INTEGER NOT NULL,
    "glyph" TEXT NOT NULL,
    "alternative" TEXT,
    "pinyin" TEXT NOT NULL,
    "translate" TEXT NOT NULL,
    "transcription" TEXT NOT NULL,
    "toneType" INTEGER NOT NULL,
    "toneIndex" INTEGER NOT NULL,

    CONSTRAINT "hieroglyph_key_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content" (
    "id" SERIAL NOT NULL,
    "sysname" TEXT,
    "value" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "content_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_permission_id_key" ON "user_permission"("id");

-- CreateIndex
CREATE INDEX "user_permission_userId_idx" ON "user_permission"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "hieroglyph_key_index_key" ON "hieroglyph_key"("index");

-- CreateIndex
CREATE UNIQUE INDEX "content_sysname_key" ON "content"("sysname");
