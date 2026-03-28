import { Container } from "@/components/layouts/container";

type Props = {
  query: string;
  city: string;
};

export function ServicesSearchBar({ query, city }: Props) {
  return (
    <section className="-mt-10 pb-10 bg-white">
      <Container>
        <form method="GET" className="mx-auto max-w-4xl rounded-2xl bg-white p-3 shadow-lg">
          <div className="grid gap-3 md:grid-cols-[1fr_260px_140px]">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="What service are you looking for?"
              className="h-14 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="city"
              defaultValue={city}
              placeholder="Zip or City"
              className="h-14 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="h-14 rounded-xl bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}