/*
  Warnings:

  - A unique constraint covering the columns `[nif]` on the table `Store` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Store_nif_key" ON "Store"("nif");
