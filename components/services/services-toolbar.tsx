type Props = {
  totalItems: number;
};

export function ServicesToolbar({ totalItems }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4 text-sm text-slate-600">
        <span className="font-semibold text-slate-800">Filters</span>
        <a href="/services" className="text-slate-500 hover:text-blue-600">
          Reset All
        </a>
        <span>Showing {totalItems} service providers</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600">
          Sort: Recommended
        </div>
      </div>
    </div>
  );
}