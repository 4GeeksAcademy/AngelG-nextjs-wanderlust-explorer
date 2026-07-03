"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useFavorites } from "@/components/favorites-provider";
import { experiences } from "@/data/experiences";

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();

  const experienceId = Number(params.id);
  const experience = experiences.find((item) => item.id === experienceId);

  if (!experience) {
    notFound();
  }

  const favorite = isFavorite(experience.id);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6">
      <Link
        href="/experiences"
        className="inline-flex w-fit rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
      >
        Volver al explorador
      </Link>

      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative h-64 w-full sm:h-80">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>

        <div className="flex flex-col gap-4 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              {experience.title}
            </h1>
            <button
              type="button"
              onClick={() => toggleFavorite(experience.id)}
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                favorite ? "bg-rose-500 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              {favorite ? "En favoritos ♥" : "Agregar a favoritos ♡"}
            </button>
          </div>

          <p className="text-slate-600">{experience.description}</p>

          <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700 sm:grid-cols-2">
            <div>ID: {experience.id}</div>
            <div>Categoria: {experience.category}</div>
            <div>Destino: {experience.destination}</div>
            <div>Precio: ${experience.price}</div>
            <div>Rating: {experience.rating} / 5</div>
          </div>
        </div>
      </article>
    </main>
  );
}
