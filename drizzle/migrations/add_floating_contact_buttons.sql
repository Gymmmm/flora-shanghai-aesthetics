-- Migration: Add floating contact buttons table
-- Created: 2026-08-18

CREATE TABLE IF NOT EXISTS `floatingContactButtons` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `platformType` VARCHAR(40) NOT NULL,
  `iconUrl` VARCHAR(500) NOT NULL,
  `linkUrl` VARCHAR(500) NOT NULL,
  `displayText` VARCHAR(100) DEFAULT NULL,
  `tooltipText` VARCHAR(200) DEFAULT NULL,
  `isActive` INT NOT NULL DEFAULT 1,
  `sortOrder` INT NOT NULL DEFAULT 0,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert demo data (optional)
INSERT INTO `floatingContactButtons` (`platformType`, `iconUrl`, `linkUrl`, `displayText`, `tooltipText`, `isActive`, `sortOrder`) VALUES
('WhatsApp', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg', 'https://wa.me/8613800138000', 'Chat on WhatsApp', 'Contact us on WhatsApp - 24h response', 1, 0),
('WeChat', 'https://upload.wikimedia.org/wikipedia/commons/1/10/WeChat_logo_2023.svg', 'https://example.com/wechat-qr', 'WeChat QR Code', 'Add us on WeChat', 1, 1);
