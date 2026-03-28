//This is the sample filtering function

import { deals, services } from "./data";
import { normalizeQuery } from "./utils";

export function filterServices(query?: string) {
  const q = normalizeQuery(query);

  if (!q) return services;

  return services.filter((item) => {
    return (
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });
}

export function filterDeals(query?: string) {
  const q = normalizeQuery(query);

  if (!q) return deals;

  return deals.filter((item) => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });
}