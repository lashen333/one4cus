import { z } from "zod";

export const createSourceUploadSchema = z.object({
  driveFileId: z.string().optional(),
  fileName: z.string().optional(),
  driveUrl: z.string().url().optional(),
  mimeType: z.string().max(150).optional(),
  sourcePlatform: z.string().max(100).optional(),
  notes: z.string().optional(),
});

export const createExtractionRunSchema = z.object({
  sourceUploadId: z.string().uuid(),
  engineName: z.string().max(120).optional(),
  rawOcrText: z.string().optional(),
  parsedJson: z.record(z.string(), z.any()).or(z.array(z.any())).optional(),
  confidenceScore: z.coerce.number().min(0).max(100).optional(),
});

export const createListingDraftSchema = z.object({
  sourceUploadId: z.string().uuid().optional(),
  extractionRunId: z.string().uuid().optional(),
  draftType: z.enum(["service", "deal"]),
  title: z.string().max(220).optional(),
  rawText: z.string().optional(),
  structuredJson: z.record(z.string(), z.any()).or(z.array(z.any())).optional(),
});