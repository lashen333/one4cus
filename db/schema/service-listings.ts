import { sql } from "drizzle-orm";
import {
  integer,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import {
  listingStatusEnum,
  reviewStatusEnum,
} from "./enums";
import { contacts } from "./contacts";
import { sourceUploads } from "./pipeline";

export const serviceListings = pgTable("service_listings", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  contactId: uuid("contact_id")
    .notNull()
    .references(() => contacts.id, { onDelete: "cascade" }),

  slug: varchar("slug", { length: 180 }).notNull().unique(),
  title: varchar("title", { length: 220 }).notNull(),

  category: varchar("category", { length: 120 }),
  subcategory: varchar("subcategory", { length: 120 }),

  shortDescription: text("short_description"),
  aboutText: text("about_text"),
  coverImageUrl: text("cover_image_url"),

  ratingAverage: numeric("rating_average", { precision: 3, scale: 2 })
    .notNull()
    .default("0.00"),
  reviewCount: integer("review_count").notNull().default(0),
  yearsExperience: integer("years_experience"),

  status: listingStatusEnum("status").notNull().default("published"),

  sourceUploadId: uuid("source_upload_id").references(() => sourceUploads.id, {
    onDelete: "set null",
  }),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const serviceOfferings = pgTable("service_offerings", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  serviceListingId: uuid("service_listing_id")
    .notNull()
    .references(() => serviceListings.id, { onDelete: "cascade" }),

  title: varchar("title", { length: 180 }).notNull(),
  description: text("description"),

  priceLabel: varchar("price_label", { length: 120 }),
  priceAmount: numeric("price_amount", { precision: 12, scale: 2 }),
  priceUnit: varchar("price_unit", { length: 50 }),

  sortOrder: integer("sort_order").notNull().default(0),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const listingReviews = pgTable("listing_reviews", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  listingType: varchar("listing_type", { length: 20 }).notNull(),
  listingId: uuid("listing_id").notNull(),

  reviewerName: varchar("reviewer_name", { length: 180 }).notNull(),
  reviewerAvatarUrl: text("reviewer_avatar_url"),
  rating: integer("rating").notNull(),
  reviewText: text("review_text").notNull(),

  reviewStatus: reviewStatusEnum("review_status")
    .notNull()
    .default("approved"),

  reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});