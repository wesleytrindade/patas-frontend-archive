/*
  Warnings:

  - Added the required column `transactionId` to the `TicketEmail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TicketEmail` ADD COLUMN `transactionId` VARCHAR(500) NOT NULL;
