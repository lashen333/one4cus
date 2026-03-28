import type { DealItem, ServiceItem } from "@/types/home";

export const serviceCategories = [
  "Electricians",
  "Plumbers",
  "Gem Mining",
  "Handymen",
  "Tutors",
];

export const services: ServiceItem[] = [
  {
    id: "svc-1",
    name: "K.M.S.Perera - ProFix Plumbing",
    category: "Plumbers",
    description:
      "Experienced and reliable plumbers for all your home and commercial needs. Emergency services available 24/7.",
    phone: "071XXXXXX1",
    image: "/images/services/plumber-1.jpg",
    rating: 4.8,
    reviews: 125,
  },
  {
    id: "svc-2",
    name: "R.M.S.Rajapaksha - Housekeeping",
    category: "Handymen",
    description:
      "Dedicated to making your home shine with eco-friendly cleaning solutions and meticulous attention to detail.",
    phone: "071XXXXXX2",
    image: "/images/services/housekeeping-1.jpg",
    rating: 4.9,
    reviews: 210,
  },
  {
    id: "svc-3",
    name: "C.M.Fernando - Landscaping",
    category: "Handymen",
    description:
      "Transform your outdoor space into a beautiful oasis. Services include garden design, maintenance, and lawn care.",
    phone: "071XXXXXX3",
    image: "/images/services/landscape-1.jpg",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "svc-4",
    name: "C.M.Fernando - IT Support",
    category: "Electricians",
    description:
      "Reliable IT solutions for homes and small businesses. From troubleshooting to network setup, we cover it all.",
    phone: "071XXXXXX4",
    image: "/images/services/it-support-1.jpg",
    rating: 4.6,
    reviews: 72,
  },
  {
    id: "svc-5",
    name: "K.M.S.Perera - Painting",
    category: "Handymen",
    description:
      "Professional interior and exterior painting services. High-quality finishes and attention to detail guaranteed.",
    phone: "071XXXXXX5",
    image: "/images/services/painting-1.jpg",
    rating: 4.9,
    reviews: 150,
  },
  {
    id: "svc-6",
    name: "R.M.S.Rajapaksha - FixIt Handyman",
    category: "Handymen",
    description:
      "Your go-to for all home repairs and improvements. No job too big or small, always reliable and efficient.",
    phone: "071XXXXXX6",
    image: "/images/services/handyman-1.jpg",
    rating: 4.7,
    reviews: 180,
  },
  {
    id: "svc-7",
    name: "R.M.S.Rajapaksha - Tutoring",
    category: "Tutors",
    description:
      "Expert tutoring across various subjects for students of all ages. Personalized learning plans to ensure success.",
    phone: "071XXXXXX7",
    image: "/images/services/tutoring-1.jpg",
    rating: 5.0,
    reviews: 95,
  },
  {
    id: "svc-8",
    name: "C.M.Fernando - Dog Walking",
    category: "Handymen",
    description:
      "Reliable and caring dog walking and pet sitting services. Your furry friends are in safe hands.",
    phone: "071XXXXXX8",
    image: "/images/services/dog-walking-1.jpg",
    rating: 4.9,
    reviews: 110,
  },
  {
    id: "svc-9",
    name: "K.M.S.Perera - Car Detailing",
    category: "Handymen",
    description:
      "Premium car detailing services to keep your vehicle looking showroom-ready. Interior and exterior care.",
    phone: "071XXXXXX9",
    image: "/images/services/car-detail-1.jpg",
    rating: 4.8,
    reviews: 60,
  },
];

export const deals: DealItem[] = [
  {
    id: "deal-1",
    title: "Gem Mining Investment – Ratnapura Project",
    category: "Gem Mining",
    description:
      "Invest in a licensed gem mining operation in Ratnapura with structured return potential.",
    image: "/images/deals/gem-1.jpg",
    raised: "LKR 7M",
    target: "LKR 12M",
  },
  {
    id: "deal-2",
    title: "Apartment Development – Colombo 05",
    category: "Property",
    description:
      "Fund a 12-unit apartment project. Returns distributed after property sales.",
    image: "/images/deals/apartment-1.jpg",
    raised: "LKR 75M",
    target: "LKR 80M",
  },
  {
    id: "deal-3",
    title: "Tech Startup – AI-Based Delivery App",
    category: "Technology",
    description:
      "Invest in a Sri Lankan AI logistics platform targeting urban delivery optimization.",
    image: "/images/deals/tech-1.jpg",
    raised: "LKR 10M",
    target: "LKR 15M",
  },
  {
    id: "deal-4",
    title: "Gem Mining Investment – Ratnapura Project 2",
    category: "Gem Mining",
    description:
      "A second-stage investment opportunity in a high-potential licensed mining operation.",
    image: "/images/deals/gem-2.jpg",
    raised: "LKR 7M",
    target: "LKR 12M",
  },
  {
    id: "deal-5",
    title: "Manufacturing Expansion – Industrial Plant",
    category: "Industry",
    description:
      "Capital raise for machinery expansion and export capacity increase.",
    image: "/images/deals/industry-1.jpg",
    raised: "LKR 20M",
    target: "LKR 30M",
  },
  {
    id: "deal-6",
    title: "Tourism Villa Project – Southern Coast",
    category: "Tourism",
    description:
      "Boutique tourism property targeting high-end local and foreign visitors.",
    image: "/images/deals/tourism-1.jpg",
    raised: "LKR 18M",
    target: "LKR 25M",
  },
];