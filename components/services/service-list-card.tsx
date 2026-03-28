import Image from "next/image";
import Link from "next/link";
import type { ServiceListItem } from "@/types/services";

type Props = {
  item: ServiceListItem;
};

export function ServiceListCard({ item }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-56 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {item.category}
        </div>

        {item.availableNow ? (
          <div className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
            Available
          </div>
        ) : null}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
          <span>{item.companyName}</span>
          {item.verified ? (
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
              Verified
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-900">
          {item.title}
        </h3>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
          <span>⭐ {item.rating} ({item.reviews})</span>
          <span>🕒 {item.yearsExperience}+ Years</span>
        </div>

        <div className="mt-3 text-sm text-slate-500">
          📍 {item.location}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Starting Rate
            </p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              {item.priceFrom}LKR
              <span className="ml-1 text-base font-medium text-slate-500">
                /{item.priceUnit}
              </span>
            </p>
          </div>

          <Link
            href={`/services/${item.slug}`}
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            View Profile
          </Link>
        </div>
      </div>
    </article>
  );
}