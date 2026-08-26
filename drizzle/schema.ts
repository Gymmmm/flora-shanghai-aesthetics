import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"), email: varchar("email", { length: 320 }), loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(), createdAt: timestamp("createdAt").defaultNow().notNull(), updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(), lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  publicId: varchar("publicId", { length: 64 }).notNull().unique(),
  fullName: varchar("fullName", { length: 160 }).notNull(), country: varchar("country", { length: 120 }).notNull(), age: int("age"), email: varchar("email", { length: 320 }).notNull(), whatsapp: varchar("whatsapp", { length: 80 }), preferredLanguage: varchar("preferredLanguage", { length: 40 }).notNull(), procedureSlug: varchar("procedureSlug", { length: 100 }).notNull(), mainConcern: text("mainConcern").notNull(), previousProcedures: text("previousProcedures"), preferredAesthetic: text("preferredAesthetic"), estimatedBudget: varchar("estimatedBudget", { length: 120 }), expectedTravelDate: varchar("expectedTravelDate", { length: 40 }), canTravelToShanghai: int("canTravelToShanghai").notNull().default(0), consent: int("consent").notNull().default(0), status: varchar("status", { length: 40 }).notNull().default("NEW"), source: varchar("source", { length: 120 }), utmSource: varchar("utmSource", { length: 120 }), utmMedium: varchar("utmMedium", { length: 120 }), utmCampaign: varchar("utmCampaign", { length: 160 }), utmContent: varchar("utmContent", { length: 160 }), landingPage: varchar("landingPage", { length: 500 }), referrer: varchar("referrer", { length: 500 }), createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const consultationSubmissions = mysqlTable("consultationSubmissions", {
  id: int("id").autoincrement().primaryKey(), leadPublicId: varchar("leadPublicId", { length: 64 }).notNull(), payloadJson: text("payloadJson").notNull(), createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const patientUploads = mysqlTable("patientUploads", {
  id: int("id").autoincrement().primaryKey(), leadPublicId: varchar("leadPublicId", { length: 64 }).notNull(), storageKey: varchar("storageKey", { length: 500 }).notNull(), originalName: varchar("originalName", { length: 255 }).notNull(), mimeType: varchar("mimeType", { length: 120 }).notNull(), sizeBytes: int("sizeBytes").notNull(), expiresAt: timestamp("expiresAt"), deletedAt: timestamp("deletedAt"), createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const floatingContactButtons = mysqlTable("floatingContactButtons", {
  id: int("id").autoincrement().primaryKey(),
  platformType: varchar("platformType", { length: 40 }).notNull(),
  iconUrl: varchar("iconUrl", { length: 500 }).notNull(),
  linkUrl: varchar("linkUrl", { length: 500 }).notNull(),
  displayText: varchar("displayText", { length: 100 }),
  tooltipText: varchar("tooltipText", { length: 200 }),
  isActive: int("isActive").notNull().default(1),
  sortOrder: int("sortOrder").notNull().default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
export type PatientUpload = typeof patientUploads.$inferSelect;
export type FloatingContactButton = typeof floatingContactButtons.$inferSelect;
export type InsertFloatingContactButton = typeof floatingContactButtons.$inferInsert;
