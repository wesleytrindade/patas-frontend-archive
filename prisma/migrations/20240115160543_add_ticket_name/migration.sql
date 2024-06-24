/*
  Warnings:

  - Added the required column `ticketName` to the `Badge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Badge` ADD COLUMN `ticketName` VARCHAR(255) NOT NULL;
