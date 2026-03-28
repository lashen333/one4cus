import { HeroSection } from "@/components/home/hero-section";
import { SearchPanel } from "@/components/home/search-panel";
import { ListingsSection } from "@/components/home/listings-section";
import { normalizeMode } from "@/lib/home/utils";
import { filterDeals, filterServices } from "@/lib/home/filters";

type HomePageProps = {
  searchParams?: Promise<{
    mode?: string;
    q?: string;
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const mode = normalizeMode(params?.mode);
  const query = params?.q?.trim() ?? "";

  const filteredServices = filterServices(query);
  const filteredDeals = filterDeals(query);

  return (
    <>
      <HeroSection />
      <SearchPanel mode={mode} query={query} />
      <ListingsSection
        mode={mode}
        query={query}
        services={filteredServices}
        deals={filteredDeals}
      />
    </>
  );
}