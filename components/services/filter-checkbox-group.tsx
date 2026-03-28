type Option = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  name: string;
  options: Option[];
  selectedValues: string[];
};

export function FilterCheckboxGroup({
  title,
  name,
  options,
  selectedValues,
}: Props) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
        {title}
      </h3>

      <div className="mt-4 space-y-3">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              name={name}
              value={option.value}
              defaultChecked={selectedValues.includes(option.value)}
              className="h-4 w-4 rounded border-slate-300"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}