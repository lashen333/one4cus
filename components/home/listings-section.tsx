import { Container } from "@/components/layouts/container";
import type { HomeMode, DealItem, ServiceItem } from "@/types/home";
import { SectionToggle } from "./section-toggle";
import { ServiceCard } from "./service-card";
import { DealCard } from "./deal-card";
import Link from "next/link";

type Props = {
  mode: HomeMode;
  query: string;
  services: ServiceItem[];
  deals: DealItem[];
};

export function ListingsSection({ mode, query, services, deals }: Props) {
  const isServices = mode === "services";

  return (
    <section className="py-8 bg-white">
      <Container>
        <SectionToggle mode={mode} query={query} />

        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {isServices ? "Our Top Service Providers" : "Our Top Investments"}
          </h2>

          {query ? (
            <p className="mt-3 text-sm text-slate-500">
              Search results for <span className="font-semibold">"{query}"</span>
            </p>
          ) : null}
        </div>

        {isServices ? (
          <>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((item) => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>

            {services.length === 0 && (
              <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500">
                No services found for your search.
              </div>
            )}

            <div className="mt-10 flex justify-center">
              <Link
                href="/services"
                className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Browse All Services
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {deals.map((item) => (
                <DealCard key={item.id} item={item} />
              ))}
            </div>

            {deals.length === 0 && (
              <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500">
                No deals found for your search.
              </div>
            )}

            <div className="mt-10 flex justify-center">
              <Link
                href="/deals"
                className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Browse All Deals
              </Link>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}