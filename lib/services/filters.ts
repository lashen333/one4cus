import { servicesData } from "./data";
import type { ServiceListItem } from "@/types/services";

type FilterArgs = {
  q?: string;
  categories?: string[];
  rating?: string[];
  statuses?: string[];
  availability?: string[];
  verifiedOnly?: boolean;
};

export function filterServices({
  q,
  categories = [],
  rating = [],
  statuses = [],
  availability = [],
  verifiedOnly = false,
}: FilterArgs): ServiceListItem[] {
  const query = q?.trim().toLowerCase() ?? "";

  return servicesData.filter((item) => {
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.companyName.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query);

    const matchesCategory =
      categories.length === 0 || categories.includes(item.category);

    const matchesRating =
      rating.length === 0 ||
      rating.some((value) => {
        if (value === "5") return item.rating >= 5;
        if (value === "4") return item.rating >= 4;
        if (value === "3") return item.rating >= 3;
        return true;
      });

    const matchesStatus =
      statuses.length === 0 ||
      statuses.every((status) => {
        if (status === "Verified Professionals") return item.verified;
        if (status === "Background Checked") return item.backgroundChecked;
        if (status === "Licensed & Insured") return item.licensedInsured;
        return true;
      });

    const matchesAvailability =
      availability.length === 0 ||
      availability.every((status) => {
        if (status === "Available Today") return item.availableNow;
        if (status === "Accepting New Clients") return item.acceptingNewClients;
        if (status === "Emergency Services (24/7)") return item.emergencyServices;
        return true;
      });

    const matchesVerifiedOnly = !verifiedOnly || item.verified;

    return (
      matchesQuery &&
      matchesCategory &&
      matchesRating &&
      matchesStatus &&
      matchesAvailability &&
      matchesVerifiedOnly
    );
  });
}

export function paginateServices<T>(items: T[], page: number, pageSize: number) {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const paginatedItems = items.slice(start, start + pageSize);

  return {
    items: paginatedItems,
    totalItems,
    totalPages,
    currentPage,
  };
}