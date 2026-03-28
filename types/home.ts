//All types related to the home page

export type HomeMode = "services" | "deals";

export type ServiceItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  phone: string;
  image: string;
  rating: number;
  reviews: number;
};

export type DealItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  raised: string;
  target: string;
};