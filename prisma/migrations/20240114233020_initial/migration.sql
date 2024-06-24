-- CreateTable
CREATE TABLE `Badge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ticketEmail` VARCHAR(255) NOT NULL,
    `fursonaName` VARCHAR(400) NOT NULL,
    `fursonaImageSrc` VARCHAR(3000) NOT NULL,
    `ticketTierId` INTEGER NOT NULL,

    INDEX `ticketTierId`(`ticketTierId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TicketTier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ticketTier` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Badge` ADD CONSTRAINT `Badge_ibfk_1` FOREIGN KEY (`ticketTierId`) REFERENCES `TicketTier`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
