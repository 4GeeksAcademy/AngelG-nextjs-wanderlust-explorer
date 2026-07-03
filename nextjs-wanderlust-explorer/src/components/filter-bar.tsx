import type { ExperienceCategory } from "@/types/experience";

interface FilterBarProps {
  categories: ExperienceCategory[];
  destinations: string[];
  selectedCategory: ExperienceCategory | "";
  selectedDestination: string;
  onCategoryChange: (category: ExperienceCategory | "") => void;
  onDestinationChange: (destination: string) => void;
}

export function FilterBar({
  categories,
  destinations,
  selectedCategory,
  selectedDestination,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="category-filter" className="mb-2 block text-sm font-semibold text-slate-700">
          Categoria
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value as ExperienceCategory | "")}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
        >
          <option value="">Todas</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="destination-filter" className="mb-2 block text-sm font-semibold text-slate-700">
          Destino
        </label>
        <select
          id="destination-filter"
          value={selectedDestination}
          onChange={(event) => onDestinationChange(event.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
        >
          <option value="">Todos</option>
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
