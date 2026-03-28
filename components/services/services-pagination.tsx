type Props = {
  currentPage: number;
  totalPages: number;
  baseQueryString: string;
};

export function ServicesPagination({
  currentPage,
  totalPages,
  baseQueryString,
}: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2">
      {pages.map((page) => (
        <a
          key={page}
          href={`/services?${baseQueryString}&page=${page}`}
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "border border-slate-200 bg-white text-slate-700"
          }`}
        >
          {page}
        </a>
      ))}
    </div>
  );
}