/*
  Warnings:

  - A unique constraint covering the columns `[transactionId]` on the table `TicketEmail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `TicketEmail_transactionId_key` ON `TicketEmail`(`transactionId`);
