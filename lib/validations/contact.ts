import { z } from "zod";

export const createContactSchema = z.object({
  contactType: z.enum(["service_provider", "dealer"]),
  displayName: z.string().min(2).max(180),
  legalName: z.string().max(220).optional(),
  phoneNumber: z.string().max(30).optional(),
  whatsappNumber: z.string().max(30).optional(),
  email: z.string().email().optional(),
  city: z.string().max(120).optional(),
  district: z.string().max(120).optional(),
  addressLine: z.string().max(255).optional(),
  profileImageUrl: z.string().url().optional(),
  coverImageUrl: z.string().url().optional(),
  shortBio: z.string().optional(),
  isVerified: z.boolean().optional(),
  sourceUploadId: z.string().uuid().optional(),
});