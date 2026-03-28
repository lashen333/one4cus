type Props = {
  categories: string[];
  ratings: string[];
};

export function ServicesActiveFilters({ categories, ratings }: Props) {
  const hasFilters = categories.length > 0 || ratings.length > 0;

  if (!hasFilters) return null;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {categories.map((category) => (
        <span
          key={category}
          className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
        >
          Category: {category}
        </span>
      ))}

      {ratings.map((rating) => (
        <span
          key={rating}
          className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
        >
          Rating: {rating}.0+
        </span>
      ))}

      <a href="/services" className="text-sm font-medium text-blue-600 hover:underline">
        Clear All
      </a>
    </div>
  );
}