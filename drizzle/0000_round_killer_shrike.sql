CREATE TYPE "public"."contact_type" AS ENUM('service_provider', 'dealer', 'company');--> statement-breakpoint
CREATE TYPE "public"."draft_review_status" AS ENUM('pending', 'reviewed', 'approved', 'rejected', 'published');--> statement-breakpoint
CREATE TYPE "public"."draft_type" AS ENUM('service', 'deal');--> statement-breakpoint
CREATE TYPE "public"."extraction_status" AS ENUM('pending', 'processing', 'completed', 'failed');--> statement-breakpoint
CREATE TYPE "public"."listing_status" AS ENUM('draft', 'published', 'archived');--> statement-breakpoint
CREATE TYPE "public"."listing_type" AS ENUM('service', 'deal');--> statement-breakpoint
CREATE TYPE "public"."media_type" AS ENUM('image', 'video', 'document');--> statement-breakpoint
CREATE TYPE "public"."payout_frequency" AS ENUM('monthly', 'quarterly', 'post_auction', 'one_time');--> statement-breakpoint
CREATE TYPE "public"."review_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."risk_level" AS ENUM('low', 'medium', 'high');--> statement-breakpoint
CREATE TYPE "public"."upload_processing_status" AS ENUM('pending', 'processing', 'completed', 'failed');--> statement-breakpoint
CREATE TABLE "contacts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"contact_type" "contact_type" NOT NULL,
	"display_name" varchar(180) NOT NULL,
	"legal_name" varchar(220),
	"phone_number" varchar(30),
	"whatsapp_number" varchar(30),
	"email" varchar(255),
	"city" varchar(120),
	"district" varchar(120),
	"address_line" varchar(255),
	"profile_image_url" text,
	"cover_image_url" text,
	"short_bio" text,
	"is_verified" boolean DEFAULT false NOT NULL,
	"source_upload_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "deal_faqs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"deal_listing_id" uuid NOT NULL,
	"question" text NOT NULL,
	"answer" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "deal_gallery_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"deal_listing_id" uuid NOT NULL,
	"media_type" "media_type" DEFAULT 'image' NOT NULL,
	"file_url" text NOT NULL,
	"alt_text" varchar(255),
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "deal_highlights" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"deal_listing_id" uuid NOT NULL,
	"title" varchar(180) NOT NULL,
	"description" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "deal_listings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"contact_id" uuid NOT NULL,
	"slug" varchar(180) NOT NULL,
	"title" varchar(220) NOT NULL,
	"subtitle" text,
	"category" varchar(120),
	"hero_image_url" text,
	"overview" text,
	"location_text" varchar(180),
	"country" varchar(120),
	"city" varchar(120),
	"district" varchar(120),
	"risk_level" "risk_level" DEFAULT 'medium' NOT NULL,
	"status" "listing_status" DEFAULT 'published' NOT NULL,
	"target_roi_min" numeric(5, 2),
	"target_roi_max" numeric(5, 2),
	"expected_returns_label" varchar(120),
	"investment_term_label" varchar(120),
	"minimum_investment" numeric(14, 2),
	"entry_level_label" varchar(120),
	"funding_goal" numeric(14, 2),
	"funding_raised" numeric(14, 2) DEFAULT '0' NOT NULL,
	"asset_type" varchar(120),
	"payout_frequency" "payout_frequency",
	"proposal_file_url" text,
	"explainer_video_url" text,
	"is_verified_opportunity" boolean DEFAULT false NOT NULL,
	"investor_count" integer DEFAULT 0 NOT NULL,
	"source_upload_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "deal_listings_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "lead_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"listing_type" varchar(20) NOT NULL,
	"listing_id" uuid NOT NULL,
	"contact_id" uuid NOT NULL,
	"user_phone" varchar(30),
	"user_email" varchar(255),
	"revealed_phone_number" varchar(30) NOT NULL,
	"source_page" text,
	"user_ip" varchar(100),
	"user_agent" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "extraction_runs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"source_upload_id" uuid NOT NULL,
	"engine_name" varchar(120),
	"raw_ocr_text" text,
	"parsed_json" jsonb,
	"confidence_score" numeric(5, 2),
	"status" "extraction_status" DEFAULT 'pending' NOT NULL,
	"error_message" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "listing_drafts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"source_upload_id" uuid,
	"extraction_run_id" uuid,
	"draft_type" "draft_type" NOT NULL,
	"title" varchar(220),
	"raw_text" text,
	"structured_json" jsonb,
	"review_status" "draft_review_status" DEFAULT 'pending' NOT NULL,
	"published_listing_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "source_uploads" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"drive_file_id" text,
	"file_name" text,
	"drive_url" text,
	"mime_type" varchar(150),
	"source_platform" varchar(100),
	"processing_status" "upload_processing_status" DEFAULT 'pending' NOT NULL,
	"ocr_text" text,
	"notes" text,
	"uploaded_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "listing_reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"listing_type" varchar(20) NOT NULL,
	"listing_id" uuid NOT NULL,
	"reviewer_name" varchar(180) NOT NULL,
	"reviewer_avatar_url" text,
	"rating" integer NOT NULL,
	"review_text" text NOT NULL,
	"review_status" "review_status" DEFAULT 'approved' NOT NULL,
	"reviewed_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "service_listings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"contact_id" uuid NOT NULL,
	"slug" varchar(180) NOT NULL,
	"title" varchar(220) NOT NULL,
	"category" varchar(120),
	"subcategory" varchar(120),
	"short_description" text,
	"about_text" text,
	"cover_image_url" text,
	"rating_average" numeric(3, 2) DEFAULT '0.00' NOT NULL,
	"review_count" integer DEFAULT 0 NOT NULL,
	"years_experience" integer,
	"status" "listing_status" DEFAULT 'published' NOT NULL,
	"source_upload_id" uuid,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "service_listings_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "service_offerings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"service_listing_id" uuid NOT NULL,
	"title" varchar(180) NOT NULL,
	"description" text,
	"price_label" varchar(120),
	"price_amount" numeric(12, 2),
	"price_unit" varchar(50),
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_source_upload_id_source_uploads_id_fk" FOREIGN KEY ("source_upload_id") REFERENCES "public"."source_uploads"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deal_faqs" ADD CONSTRAINT "deal_faqs_deal_listing_id_deal_listings_id_fk" FOREIGN KEY ("deal_listing_id") REFERENCES "public"."deal_listings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deal_gallery_items" ADD CONSTRAINT "deal_gallery_items_deal_listing_id_deal_listings_id_fk" FOREIGN KEY ("deal_listing_id") REFERENCES "public"."deal_listings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deal_highlights" ADD CONSTRAINT "deal_highlights_deal_listing_id_deal_listings_id_fk" FOREIGN KEY ("deal_listing_id") REFERENCES "public"."deal_listings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deal_listings" ADD CONSTRAINT "deal_listings_contact_id_contacts_id_fk" FOREIGN KEY ("contact_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deal_listings" ADD CONSTRAINT "deal_listings_source_upload_id_source_uploads_id_fk" FOREIGN KEY ("source_upload_id") REFERENCES "public"."source_uploads"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lead_requests" ADD CONSTRAINT "lead_requests_contact_id_contacts_id_fk" FOREIGN KEY ("contact_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "extraction_runs" ADD CONSTRAINT "extraction_runs_source_upload_id_source_uploads_id_fk" FOREIGN KEY ("source_upload_id") REFERENCES "public"."source_uploads"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listing_drafts" ADD CONSTRAINT "listing_drafts_source_upload_id_source_uploads_id_fk" FOREIGN KEY ("source_upload_id") REFERENCES "public"."source_uploads"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listing_drafts" ADD CONSTRAINT "listing_drafts_extraction_run_id_extraction_runs_id_fk" FOREIGN KEY ("extraction_run_id") REFERENCES "public"."extraction_runs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "service_listings" ADD CONSTRAINT "service_listings_contact_id_contacts_id_fk" FOREIGN KEY ("contact_id") REFERENCES "public"."contacts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "service_listings" ADD CONSTRAINT "service_listings_source_upload_id_source_uploads_id_fk" FOREIGN KEY ("source_upload_id") REFERENCES "public"."source_uploads"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "service_offerings" ADD CONSTRAINT "service_offerings_service_listing_id_service_listings_id_fk" FOREIGN KEY ("service_listing_id") REFERENCES "public"."service_listings"("id") ON DELETE cascade ON UPDATE no action;