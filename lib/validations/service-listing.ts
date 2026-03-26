import { z } from "zod";

export const createServiceListingSchema = z.object({
  contactId: z.string().uuid(),
  slug: z.string().min(3).max(180),
  title: z.string().min(2).max(220),
  category: z.string().max(120).optional(),
  subcategory: z.string().max(120).optional(),
  shortDescription: z.string().optional(),
  aboutText: z.string().optional(),
  coverImageUrl: z.string().url().optional(),
  yearsExperience: z.number().int().min(0).max(80).optional(),
  sourceUploadId: z.string().uuid().optional(),
});

export const createServiceOfferingSchema = z.object({
  serviceListingId: z.string().uuid(),
  title: z.string().min(2).max(180),
  description: z.string().optional(),
  priceLabel: z.string().max(120).optional(),
  priceAmount: z.coerce.number().min(0).optional(),
  priceUnit: z.string().max(50).optional(),
  sortOrder: z.number().int().min(0).optional(),
});

export const createListingReviewSchema = z.object({
  listingType: z.enum(["service", "deal"]),
  listingId: z.string().uuid(),
  reviewerName: z.string().min(2).max(180),
  reviewerAvatarUrl: z.string().url().optional(),
  rating: z.number().int().min(1).max(5),
  reviewText: z.string().min(3),
});

export const revealPhoneSchema = z
  .object({
    listingType: z.enum(["service", "deal"]),
    listingId: z.string().uuid(),
    contactId: z.string().uuid(),
    userPhone: z.string().max(30).optional(),
    userEmail: z.string().email().optional(),
    sourcePage: z.string().optional(),
  })
  .refine((data) => Boolean(data.userPhone || data.userEmail), {
    message: "Phone number or email is required",
    path: ["userPhone"],
  });