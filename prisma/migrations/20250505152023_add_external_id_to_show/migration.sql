/*
  Warnings:

  - A unique constraint covering the columns `[externalId]` on the table `Show` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `externalId` to the `Show` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Show" ADD COLUMN     "externalId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Show_externalId_key" ON "Show"("externalId");
