import Link from "next/link";
import type { HomeMode } from "@/types/home";

type Props = {
  mode: HomeMode;
  query: string;
};

export function SectionToggle({ mode, query }: Props) {
  const queryString = query ? `&q=${encodeURIComponent(query)}` : "";

  return (
    <div className="flex justify-center">
      <div className="inline-flex rounded-full bg-blue-600 p-2">
        <Link
          href={`/?mode=services${queryString}`}
          className={`rounded-full px-10 py-4 text-lg font-semibold transition ${
            mode === "services"
              ? "bg-white text-blue-600"
              : "text-white hover:bg-blue-500"
          }`}
        >
          Services
        </Link>

        <Link
          href={`/?mode=deals${queryString}`}
          className={`rounded-full px-10 py-4 text-lg font-semibold transition ${
            mode === "deals"
              ? "bg-white text-blue-600"
              : "text-white hover:bg-blue-500"
          }`}
        >
          Deals
        </Link>
      </div>
    </div>
  );
}