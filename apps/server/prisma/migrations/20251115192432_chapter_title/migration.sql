/*
  Warnings:

  - Added the required column `chapterTitle` to the `BookContent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookContent" ADD COLUMN     "chapterTitle" TEXT NOT NULL;
