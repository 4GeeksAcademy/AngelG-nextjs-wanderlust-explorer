interface SearchBarProps {
  value: string;
  onChange: (nextValue: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full">
      <label htmlFor="experience-search" className="mb-2 block text-sm font-semibold text-slate-700">
        Buscar por titulo
      </label>
      <input
        id="experience-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ej: vela, tasting, safari"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
      />
    </div>
  );
}
