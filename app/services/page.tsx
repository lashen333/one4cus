import { Container } from "@/components/layouts/container";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesSearchBar } from "@/components/services/services-search-bar";
import { ServicesFilterSidebar } from "@/components/services/services-filter-sidebar";
import { ServicesToolbar } from "@/components/services/services-toolbar";
import { ServicesActiveFilters } from "@/components/services/services-active-filters";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesPagination } from "@/components/services/services-pagination";
import { filterServices, paginateServices } from "@/lib/services/filters";
import { toArray, toNumber } from "@/lib/services/utils";

type Props = {
  searchParams?: Promise<{
    q?: string;
    city?: string;
    category?: string | string[];
    rating?: string | string[];
    status?: string | string[];
    availability?: string | string[];
    verified?: string;
    page?: string;
  }>;
};

const PAGE_SIZE = 6;

export default async function ServicesPage({ searchParams }: Props) {
  const params = await searchParams;

  const query = params?.q ?? "";
  const city = params?.city ?? "";
  const categories = toArray(params?.category);
  const ratings = toArray(params?.rating);
  const statuses = toArray(params?.status);
  const availability = toArray(params?.availability);
  const verifiedOnly = params?.verified === "true";
  const page = toNumber(params?.page, 1);

  const filtered = filterServices({
    q: query,
    categories,
    rating: ratings,
    statuses,
    availability,
    verifiedOnly,
  });

  const paginated = paginateServices(filtered, page, PAGE_SIZE);

  const baseQuery = new URLSearchParams();
  if (query) baseQuery.set("q", query);
  if (city) baseQuery.set("city", city);
  categories.forEach((item) => baseQuery.append("category", item));
  ratings.forEach((item) => baseQuery.append("rating", item));
  statuses.forEach((item) => baseQuery.append("status", item));
  availability.forEach((item) => baseQuery.append("availability", item));
  if (verifiedOnly) baseQuery.set("verified", "true");

  return (
    <>
      <ServicesHero />
      <ServicesSearchBar query={query} city={city} />

      <section className="bg-slate-50 py-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <ServicesFilterSidebar
              query={query}
              city={city}
              selectedCategories={categories}
              selectedRatings={ratings}
              selectedStatuses={statuses}
              selectedAvailability={availability}
              verifiedOnly={verifiedOnly}
            />

            <div className="space-y-6">
              <ServicesToolbar totalItems={paginated.totalItems} />
              <ServicesActiveFilters categories={categories} ratings={ratings} />
              <ServicesGrid items={paginated.items} />
              <ServicesPagination
                currentPage={paginated.currentPage}
                totalPages={paginated.totalPages}
                baseQueryString={baseQuery.toString()}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}