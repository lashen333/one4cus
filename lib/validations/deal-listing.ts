import { z } from "zod";

export const createDealListingSchema = z.object({
  contactId: z.string().uuid(),
  slug: z.string().min(3).max(180),
  title: z.string().min(3).max(220),
  subtitle: z.string().optional(),
  category: z.string().max(120).optional(),
  heroImageUrl: z.string().url().optional(),
  overview: z.string().optional(),
  locationText: z.string().max(180).optional(),
  country: z.string().max(120).optional(),
  city: z.string().max(120).optional(),
  district: z.string().max(120).optional(),
  riskLevel: z.enum(["low", "medium", "high"]).optional(),
  targetRoiMin: z.coerce.number().min(0).optional(),
  targetRoiMax: z.coerce.number().min(0).optional(),
  expectedReturnsLabel: z.string().max(120).optional(),
  investmentTermLabel: z.string().max(120).optional(),
  minimumInvestment: z.coerce.number().min(0).optional(),
  entryLevelLabel: z.string().max(120).optional(),
  fundingGoal: z.coerce.number().min(0).optional(),
  fundingRaised: z.coerce.number().min(0).optional(),
  assetType: z.string().max(120).optional(),
  payoutFrequency: z
    .enum(["monthly", "quarterly", "post_auction", "one_time"])
    .optional(),
  proposalFileUrl: z.string().url().optional(),
  explainerVideoUrl: z.string().url().optional(),
  isVerifiedOpportunity: z.boolean().optional(),
  investorCount: z.number().int().min(0).optional(),
  sourceUploadId: z.string().uuid().optional(),
});

export const createDealGalleryItemSchema = z.object({
  dealListingId: z.string().uuid(),
  mediaType: z.enum(["image", "video", "document"]).optional(),
  fileUrl: z.string().url(),
  altText: z.string().max(255).optional(),
  sortOrder: z.number().int().min(0).optional(),
});

export const createDealHighlightSchema = z.object({
  dealListingId: z.string().uuid(),
  title: z.string().min(2).max(180),
  description: z.string().optional(),
  sortOrder: z.number().int().min(0).optional(),
});

export const createDealFaqSchema = z.object({
  dealListingId: z.string().uuid(),
  question: z.string().min(3),
  answer: z.string().min(3),
  sortOrder: z.number().int().min(0).optional(),
});