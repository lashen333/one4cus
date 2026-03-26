import { sql } from "drizzle-orm";
import {
  boolean,
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
  mediaTypeEnum,
  payoutFrequencyEnum,
  riskLevelEnum,
} from "./enums";
import { contacts } from "./contacts";
import { sourceUploads } from "./pipeline";

export const dealListings = pgTable("deal_listings", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  contactId: uuid("contact_id")
    .notNull()
    .references(() => contacts.id, { onDelete: "cascade" }),

  slug: varchar("slug", { length: 180 }).notNull().unique(),
  title: varchar("title", { length: 220 }).notNull(),
  subtitle: text("subtitle"),

  category: varchar("category", { length: 120 }),

  heroImageUrl: text("hero_image_url"),
  overview: text("overview"),
  locationText: varchar("location_text", { length: 180 }),
  country: varchar("country", { length: 120 }),
  city: varchar("city", { length: 120 }),
  district: varchar("district", { length: 120 }),

  riskLevel: riskLevelEnum("risk_level").notNull().default("medium"),
  status: listingStatusEnum("status").notNull().default("published"),

  targetRoiMin: numeric("target_roi_min", { precision: 5, scale: 2 }),
  targetRoiMax: numeric("target_roi_max", { precision: 5, scale: 2 }),

  expectedReturnsLabel: varchar("expected_returns_label", { length: 120 }),
  investmentTermLabel: varchar("investment_term_label", { length: 120 }),
  minimumInvestment: numeric("minimum_investment", { precision: 14, scale: 2 }),
  entryLevelLabel: varchar("entry_level_label", { length: 120 }),

  fundingGoal: numeric("funding_goal", { precision: 14, scale: 2 }),
  fundingRaised: numeric("funding_raised", { precision: 14, scale: 2 })
    .notNull()
    .default("0"),

  assetType: varchar("asset_type", { length: 120 }),
  payoutFrequency: payoutFrequencyEnum("payout_frequency"),

  proposalFileUrl: text("proposal_file_url"),
  explainerVideoUrl: text("explainer_video_url"),

  isVerifiedOpportunity: boolean("is_verified_opportunity")
    .notNull()
    .default(false),

  investorCount: integer("investor_count").notNull().default(0),

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

export const dealGalleryItems = pgTable("deal_gallery_items", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  dealListingId: uuid("deal_listing_id")
    .notNull()
    .references(() => dealListings.id, { onDelete: "cascade" }),

  mediaType: mediaTypeEnum("media_type").notNull().default("image"),
  fileUrl: text("file_url").notNull(),
  altText: varchar("alt_text", { length: 255 }),
  sortOrder: integer("sort_order").notNull().default(0),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const dealHighlights = pgTable("deal_highlights", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  dealListingId: uuid("deal_listing_id")
    .notNull()
    .references(() => dealListings.id, { onDelete: "cascade" }),

  title: varchar("title", { length: 180 }).notNull(),
  description: text("description"),
  sortOrder: integer("sort_order").notNull().default(0),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const dealFaqs = pgTable("deal_faqs", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  dealListingId: uuid("deal_listing_id")
    .notNull()
    .references(() => dealListings.id, { onDelete: "cascade" }),

  question: text("question").notNull(),
  answer: text("answer").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const leadRequests = pgTable("lead_requests", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  listingType: varchar("listing_type", { length: 20 }).notNull(),
  listingId: uuid("listing_id").notNull(),

  contactId: uuid("contact_id")
    .notNull()
    .references(() => contacts.id, { onDelete: "cascade" }),

  userPhone: varchar("user_phone", { length: 30 }),
  userEmail: varchar("user_email", { length: 255 }),

  revealedPhoneNumber: varchar("revealed_phone_number", { length: 30 }).notNull(),
  sourcePage: text("source_page"),
  userIp: varchar("user_ip", { length: 100 }),
  userAgent: text("user_agent"),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});