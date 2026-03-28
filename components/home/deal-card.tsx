import Image from "next/image";
import Link from "next/link";
import type { DealItem } from "@/types/home";

type Props = {
  item: DealItem;
};

export function DealCard({ item }: Props) {
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
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>

        <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-500">Raised</p>
            <p className="font-bold text-blue-600">{item.raised}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-slate-500">Target</p>
            <p className="font-bold text-slate-900">{item.target}</p>
          </div>
        </div>

        <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
          <div className="h-2 w-2/3 rounded-full bg-blue-600" />
        </div>

        <Link
          href={`/deals/${item.id}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
        >
          View Opportunity
        </Link>
      </div>
    </article>
  );
}