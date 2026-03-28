import { Container } from "@/components/layouts/container";
import { serviceCategories } from "@/lib/home/data";
import type { HomeMode } from "@/types/home";

type Props = {
  mode: HomeMode;
  query: string;
};

export function SearchPanel({ mode, query }: Props) {
  return (
    <section className="pb-6 bg-white" >
      <Container>
        <div className="rounded-3xl bg-slate-50 px-6 py-10 sm:px-10">
          <form className="mx-auto max-w-4xl" method="GET">
            <input type="hidden" name="mode" value={mode} />

            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search for services or deals..."
                className="h-14 flex-1 rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500"
              />
              <button
                type="submit"
                className="h-14 rounded-lg bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Search
              </button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {serviceCategories.map((category) => (
                <a
                  key={category}
                  href={`/?mode=${mode}&q=${encodeURIComponent(category)}`}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-600 hover:border-blue-500 hover:text-blue-600"
                >
                  {category}
                </a>
              ))}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}