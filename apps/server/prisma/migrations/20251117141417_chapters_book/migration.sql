/*
  Warnings:

  - You are about to drop the column `chapterTitle` on the `BookContent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BookContent" DROP COLUMN "chapterTitle",
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "BookChapter" (
    "id" SERIAL NOT NULL,
    "bookId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startPage" INTEGER NOT NULL,

    CONSTRAINT "BookChapter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BookChapter_bookId_startPage_key" ON "BookChapter"("bookId", "startPage");
