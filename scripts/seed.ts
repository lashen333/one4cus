import "dotenv/config";
import { db } from "../db";

import {
  contacts,
} from "../db/schema/contacts";

import {
  serviceListings,
  serviceOfferings,
} from "../db/schema/service-listings";

import {
  dealListings,
  dealGalleryItems,
  dealHighlights,
  dealFaqs,
} from "../db/schema/deal-listings";

async function seed() {
  console.log("🌱 Seeding database...");

  // ---------- 1. CONTACTS ----------
  const [serviceContact] = await db
    .insert(contacts)
    .values({
      contactType: "service_provider",
      displayName: "Sarah Cleaning Service",
      phoneNumber: "0771234567",
      city: "Colombo",
      district: "Colombo",
      isVerified: true,
    })
    .returning();

  const [dealerContact] = await db
    .insert(contacts)
    .values({
      contactType: "dealer",
      displayName: "R.M.S. Rajapaksha",
      phoneNumber: "0719876543",
      city: "Ratnapura",
      district: "Sabaragamuwa",
      isVerified: true,
    })
    .returning();

  // ---------- 2. SERVICE LISTING ----------
  const [serviceListing] = await db
    .insert(serviceListings)
    .values({
      contactId: serviceContact.id,
      slug: "sarah-cleaning-colombo",
      title: "Professional Home Cleaning Services",
      category: "Cleaning",
      shortDescription: "Reliable and eco-friendly cleaning solutions",
      aboutText:
        "We provide professional home and office cleaning services with eco-friendly products.",
      coverImageUrl:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
      yearsExperience: 5,
    })
    .returning();

  // ---------- 3. SERVICE OFFERINGS ----------
  await db.insert(serviceOfferings).values([
    {
      serviceListingId: serviceListing.id,
      title: "Standard Home Cleaning",
      description: "Basic cleaning for apartments and homes.",
      priceLabel: "From LKR 5,000",
      priceAmount: "5000",
    },
    {
      serviceListingId: serviceListing.id,
      title: "Deep Cleaning",
      description: "Includes kitchen, bathrooms, and detailed cleaning.",
      priceLabel: "From LKR 10,000",
      priceAmount: "10000",
    },
  ]);

  // ---------- 4. DEAL LISTING ----------
  const [deal] = await db
    .insert(dealListings)
    .values({
      contactId: dealerContact.id,
      slug: "ratnapura-gem-project",
      title: "Gem Mining Investment Opportunity",
      subtitle: "High ROI Potential in Ratnapura",
      category: "Gem Mining",
      heroImageUrl:
        "https://images.unsplash.com/photo-1606312619344-66f8b1b2d5c7",
      overview:
        "Invest in a premium gem mining project located in Ratnapura.",
      locationText: "Ratnapura, Sri Lanka",
      riskLevel: "medium",
      targetRoiMin: "20",
      targetRoiMax: "35",
      minimumInvestment: "50000",
      fundingGoal: "5000000",
      fundingRaised: "1200000",
      isVerifiedOpportunity: true,
    })
    .returning();

  // ---------- 5. DEAL GALLERY ----------
  await db.insert(dealGalleryItems).values([
    {
      dealListingId: deal.id,
      fileUrl:
        "https://images.unsplash.com/photo-1581091012184-5c3b4c4b9f8f",
    },
    {
      dealListingId: deal.id,
      fileUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
  ]);

  // ---------- 6. DEAL HIGHLIGHTS ----------
  await db.insert(dealHighlights).values([
    {
      dealListingId: deal.id,
      title: "High ROI",
      description: "Expected returns between 20% - 35%",
    },
    {
      dealListingId: deal.id,
      title: "Transparent Process",
      description: "Regular updates and reports provided",
    },
  ]);

  // ---------- 7. DEAL FAQ ----------
  await db.insert(dealFaqs).values([
    {
      dealListingId: deal.id,
      question: "What is the minimum investment?",
      answer: "LKR 50,000",
    },
    {
      dealListingId: deal.id,
      question: "Is this project verified?",
      answer: "Yes, it is verified by our team.",
    },
  ]);

  console.log("✅ Seeding completed!");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
});