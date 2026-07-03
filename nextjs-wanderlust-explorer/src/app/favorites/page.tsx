"use client";

import Link from "next/link";
import { ExperienceCard } from "@/components/experience-card";
import { useFavorites } from "@/components/favorites-provider";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite, isFavorite } = useFavorites();

  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6">
      <section>
        <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Tus favoritos
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Tienes {favoriteIds.length} experiencias guardadas.
        </p>
      </section>

      {favoriteExperiences.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h2 className="text-xl font-bold text-slate-800">Aun no tienes favoritos</h2>
          <p className="mt-2 text-slate-600">
            Marca tarjetas con el corazon para verlas aqui.
          </p>
          <Link
            href="/experiences"
            className="mt-5 inline-flex rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
          >
            Explorar experiencias
          </Link>
        </section>
      ) : (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      )}
    </main>
  );
}
