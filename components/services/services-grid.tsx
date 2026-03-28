import type { ServiceListItem } from "@/types/services";
import { ServiceListCard } from "./service-list-card";

type Props = {
  items: ServiceListItem[];
};

export function ServicesGrid({ items }: Props) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
        No service providers found for the selected filters.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ServiceListCard key={item.id} item={item} />
      ))}
    </div>
  );
}