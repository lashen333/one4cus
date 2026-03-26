import { sql } from "drizzle-orm";
import {
  boolean,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { contactTypeEnum } from "./enums";
import { sourceUploads } from "./pipeline";

export const contacts = pgTable("contacts", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  contactType: contactTypeEnum("contact_type").notNull(),

  displayName: varchar("display_name", { length: 180 }).notNull(),
  legalName: varchar("legal_name", { length: 220 }),

  phoneNumber: varchar("phone_number", { length: 30 }),
  whatsappNumber: varchar("whatsapp_number", { length: 30 }),
  email: varchar("email", { length: 255 }),

  city: varchar("city", { length: 120 }),
  district: varchar("district", { length: 120 }),
  addressLine: varchar("address_line", { length: 255 }),

  profileImageUrl: text("profile_image_url"),
  coverImageUrl: text("cover_image_url"),
  shortBio: text("short_bio"),

  isVerified: boolean("is_verified").notNull().default(false),

  sourceUploadId: uuid("source_upload_id").references(() => sourceUploads.id,{
    onDelete: "set null",
  }),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});