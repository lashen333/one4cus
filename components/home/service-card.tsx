import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "@/types/home";

type Props = {
  item: ServiceItem;
};

export function ServiceCard({ item }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-56 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>

        <div className="mt-4 space-y-2 text-sm text-slate-600">
          <p>⭐ {item.rating} ({item.reviews} reviews)</p>
          <p>📞 {item.phone}</p>
        </div>

        <Link
          href={`/services/${item.id}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
        >
          View Profile
        </Link>
      </div>
    </article>
  );
}