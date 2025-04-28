/*
  Warnings:

  - Added the required column `createdByAvatar` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdByName` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "createdByAvatar" TEXT NOT NULL,
ADD COLUMN     "createdByName" TEXT NOT NULL;
