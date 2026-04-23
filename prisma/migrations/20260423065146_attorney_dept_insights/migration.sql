/*
  Warnings:

  - You are about to drop the column `bodyCn` on the `insight` table. All the data in the column will be lost.
  - You are about to drop the column `bodyEn` on the `insight` table. All the data in the column will be lost.
  - You are about to drop the column `bodyTh` on the `insight` table. All the data in the column will be lost.
  - You are about to drop the column `coverImage` on the `insight` table. All the data in the column will be lost.
  - You are about to drop the column `excerptCn` on the `insight` table. All the data in the column will be lost.
  - You are about to drop the column `excerptEn` on the `insight` table. All the data in the column will be lost.
  - You are about to drop the column `excerptTh` on the `insight` table. All the data in the column will be lost.
  - You are about to drop the column `titleCn` on the `insight` table. All the data in the column will be lost.
  - You are about to drop the column `titleEn` on the `insight` table. All the data in the column will be lost.
  - You are about to drop the column `titleTh` on the `insight` table. All the data in the column will be lost.
  - Added the required column `body` to the `insight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `excerpt` to the `insight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `insight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "insight" DROP COLUMN "bodyCn",
DROP COLUMN "bodyEn",
DROP COLUMN "bodyTh",
DROP COLUMN "coverImage",
DROP COLUMN "excerptCn",
DROP COLUMN "excerptEn",
DROP COLUMN "excerptTh",
DROP COLUMN "titleCn",
DROP COLUMN "titleEn",
DROP COLUMN "titleTh",
ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "excerpt" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
