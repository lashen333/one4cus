export type ServiceCategory =
  | "Plumbing"
  | "Electrical"
  | "Cleaning"
  | "Landscaping"
  | "IT Support"
  | "Carpentry";

export type ProviderStatus =
  | "Verified Professionals"
  | "Background Checked"
  | "Licensed & Insured";

export type AvailabilityOption =
  | "Available Today"
  | "Accepting New Clients"
  | "Emergency Services (24/7)";

export type ServiceListItem = {
  id: string;
  slug: string;
  companyName: string;
  title: string;
  category: ServiceCategory;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  yearsExperience: number;
  location: string;
  priceFrom: number;
  priceUnit: "hour" | "visit" | "work";
  verified: boolean;
  availableNow: boolean;
  backgroundChecked: boolean;
  licensedInsured: boolean;
  acceptingNewClients: boolean;
  emergencyServices: boolean;
};