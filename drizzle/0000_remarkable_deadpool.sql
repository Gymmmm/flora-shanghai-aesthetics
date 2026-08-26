CREATE TABLE `consultationSubmissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadPublicId` varchar(64) NOT NULL,
	`payloadJson` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `consultationSubmissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`publicId` varchar(64) NOT NULL,
	`fullName` varchar(160) NOT NULL,
	`country` varchar(120) NOT NULL,
	`age` int,
	`email` varchar(320) NOT NULL,
	`whatsapp` varchar(80),
	`preferredLanguage` varchar(40) NOT NULL,
	`procedureSlug` varchar(100) NOT NULL,
	`mainConcern` text NOT NULL,
	`previousProcedures` text,
	`preferredAesthetic` text,
	`estimatedBudget` varchar(120),
	`expectedTravelDate` varchar(40),
	`canTravelToShanghai` int NOT NULL DEFAULT 0,
	`consent` int NOT NULL DEFAULT 0,
	`status` varchar(40) NOT NULL DEFAULT 'NEW',
	`source` varchar(120),
	`utmSource` varchar(120),
	`utmMedium` varchar(120),
	`utmCampaign` varchar(160),
	`utmContent` varchar(160),
	`landingPage` varchar(500),
	`referrer` varchar(500),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `leads_id` PRIMARY KEY(`id`),
	CONSTRAINT `leads_publicId_unique` UNIQUE(`publicId`)
);
--> statement-breakpoint
CREATE TABLE `patientUploads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`leadPublicId` varchar(64) NOT NULL,
	`storageKey` varchar(500) NOT NULL,
	`originalName` varchar(255) NOT NULL,
	`mimeType` varchar(120) NOT NULL,
	`sizeBytes` int NOT NULL,
	`expiresAt` timestamp,
	`deletedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `patientUploads_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
