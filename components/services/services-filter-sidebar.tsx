import { serviceCategories } from "@/lib/services/data";
import { FilterCheckboxGroup } from "./filter-checkbox-group";

type Props = {
  query: string;
  city: string;
  selectedCategories: string[];
  selectedRatings: string[];
  selectedStatuses: string[];
  selectedAvailability: string[];
  verifiedOnly: boolean;
};

export function ServicesFilterSidebar({
  query,
  city,
  selectedCategories,
  selectedRatings,
  selectedStatuses,
  selectedAvailability,
  verifiedOnly,
}: Props) {
  return (
    <aside className="rounded-2xl bg-white p-5 shadow-sm">
      <form method="GET" className="space-y-8">
        <input type="hidden" name="q" value={query} />
        <input type="hidden" name="city" value={city} />

        <FilterCheckboxGroup
          title="Service Category"
          name="category"
          options={serviceCategories.map((item) => ({ label: item, value: item }))}
          selectedValues={selectedCategories}
        />

        <FilterCheckboxGroup
          title="Minimum Rating"
          name="rating"
          options={[
            { label: "5.0", value: "5" },
            { label: "4.0 & Up", value: "4" },
            { label: "3.0 & Up", value: "3" },
          ]}
          selectedValues={selectedRatings}
        />

        <FilterCheckboxGroup
          title="Provider Status"
          name="status"
          options={[
            { label: "Verified Professionals", value: "Verified Professionals" },
            { label: "Background Checked", value: "Background Checked" },
            { label: "Licensed & Insured", value: "Licensed & Insured" },
          ]}
          selectedValues={selectedStatuses}
        />

        <FilterCheckboxGroup
          title="Availability"
          name="availability"
          options={[
            { label: "Available Today", value: "Available Today" },
            { label: "Accepting New Clients", value: "Accepting New Clients" },
            { label: "Emergency Services (24/7)", value: "Emergency Services (24/7)" },
          ]}
          selectedValues={selectedAvailability}
        />

        <label className="flex items-center gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            name="verified"
            value="true"
            defaultChecked={verifiedOnly}
            className="h-4 w-4 rounded border-slate-300"
          />
          <span>Verified Only</span>
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Apply Filters
        </button>
      </form>
    </aside>
  );
}