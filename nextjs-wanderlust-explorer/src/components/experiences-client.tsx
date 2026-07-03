"use client";

import { useEffect, useMemo } from "react";
import { ExperienceCard } from "@/components/experience-card";
import { FilterBar } from "@/components/filter-bar";
import { useFavorites } from "@/components/favorites-provider";
import { SearchBar } from "@/components/search-bar";
import { availableCategories, availableDestinations } from "@/data/experiences";
import { useExperienceFilters } from "@/hooks/use-experience-filters";
import { useExperiences } from "@/hooks/use-experiences";

export function ExperiencesClient() {
  const { toggleFavorite, isFavorite } = useFavorites();
  const {
    searchTerm,
    category,
    destination,
    setSearchTerm,
    setCategory,
    setDestination,
  } = useExperienceFilters();

  useEffect(() => {
    document.title = "Explorador de experiencias | Wanderlust Labs";
  }, []);

  const filteredExperiences = useExperiences({
    searchTerm,
    category,
    destination,
  });

  const totalLabel = useMemo(
    () => `${filteredExperiences.length} experiencias encontradas`,
    [filteredExperiences.length],
  );

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Explorador de experiencias
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Busca por titulo y combina filtros de categoria y destino.
        </p>

        <div className="mt-5 flex flex-col gap-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <FilterBar
            categories={availableCategories}
            destinations={availableDestinations}
            selectedCategory={category}
            selectedDestination={destination}
            onCategoryChange={setCategory}
            onDestinationChange={setDestination}
          />
        </div>
      </section>

      <section>
        <div className="mb-4 text-sm font-semibold text-slate-700">{totalLabel}</div>

        {filteredExperiences.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-lg font-semibold text-slate-700">
            No se encontraron resultados
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isFavorite={isFavorite(experience.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
