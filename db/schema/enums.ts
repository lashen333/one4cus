import { pgEnum } from "drizzle-orm/pg-core";

export const uploadProcessingStatusEnum = pgEnum("upload_processing_status", [
  "pending",
  "processing",
  "completed",
  "failed",
]);

export const extractionStatusEnum = pgEnum("extraction_status", [
  "pending",
  "processing",
  "completed",
  "failed",
]);

export const draftTypeEnum = pgEnum("draft_type", [
  "service",
  "deal",
]);

export const draftReviewStatusEnum = pgEnum("draft_review_status", [
  "pending",
  "reviewed",
  "approved",
  "rejected",
  "published",
]);

export const contactTypeEnum = pgEnum("contact_type", [
  "service_provider",
  "dealer",
  "company",
]);

export const listingStatusEnum = pgEnum("listing_status", [
  "draft",
  "published",
  "archived",
]);

export const listingTypeEnum = pgEnum("listing_type", [
  "service",
  "deal",
]);

export const reviewStatusEnum = pgEnum("review_status", [
  "pending",
  "approved",
  "rejected",
]);

export const riskLevelEnum = pgEnum("risk_level", [
  "low",
  "medium",
  "high",
]);

export const payoutFrequencyEnum = pgEnum("payout_frequency", [
  "monthly",
  "quarterly",
  "post_auction",
  "one_time",
]);

export const mediaTypeEnum = pgEnum("media_type", [
  "image",
  "video",
  "document",
]);