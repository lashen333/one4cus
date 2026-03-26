import { sql } from "drizzle-orm";
import {
  jsonb,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import {
  draftReviewStatusEnum,
  draftTypeEnum,
  extractionStatusEnum,
  uploadProcessingStatusEnum,
} from "./enums";

export const sourceUploads = pgTable("source_uploads", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  driveFileId: text("drive_file_id"),
  fileName: text("file_name"),
  driveUrl: text("drive_url"),
  mimeType: varchar("mime_type", { length: 150 }),
  sourcePlatform: varchar("source_platform", { length: 100 }),

  processingStatus: uploadProcessingStatusEnum("processing_status")
    .notNull()
    .default("pending"),

  ocrText: text("ocr_text"),
  notes: text("notes"),

  uploadedAt: timestamp("uploaded_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const extractionRuns = pgTable("extraction_runs", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  sourceUploadId: uuid("source_upload_id")
    .notNull()
    .references(() => sourceUploads.id, { onDelete: "cascade" }),

  engineName: varchar("engine_name", { length: 120 }),
  rawOcrText: text("raw_ocr_text"),
  parsedJson: jsonb("parsed_json"),

  confidenceScore: numeric("confidence_score", { precision: 5, scale: 2 }),
  status: extractionStatusEnum("status").notNull().default("pending"),
  errorMessage: text("error_message"),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const listingDrafts = pgTable("listing_drafts", {
  id: uuid("id").default(sql`gen_random_uuid()`).primaryKey(),

  sourceUploadId: uuid("source_upload_id")
    .references(() => sourceUploads.id, { onDelete: "set null" }),

  extractionRunId: uuid("extraction_run_id")
    .references(() => extractionRuns.id, { onDelete: "set null" }),

  draftType: draftTypeEnum("draft_type").notNull(),
  title: varchar("title", { length: 220 }),
  rawText: text("raw_text"),
  structuredJson: jsonb("structured_json"),

  reviewStatus: draftReviewStatusEnum("review_status")
    .notNull()
    .default("pending"),

  publishedListingId: uuid("published_listing_id"),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});