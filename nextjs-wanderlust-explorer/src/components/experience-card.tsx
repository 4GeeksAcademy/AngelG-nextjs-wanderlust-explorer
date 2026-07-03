import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (experienceId: number) => void;
}

export function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <button
          type="button"
          aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          onClick={() => onToggleFavorite(experience.id)}
          className={`absolute right-3 top-3 rounded-full px-3 py-2 text-sm font-bold shadow ${
            isFavorite ? "bg-rose-500 text-white" : "bg-white text-slate-700"
          }`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span>{experience.category}</span>
          <span>{experience.destination}</span>
        </div>

        <h3 className="line-clamp-2 text-lg font-bold text-slate-900">{experience.title}</h3>

        <p className="line-clamp-2 text-sm text-slate-600">{experience.description}</p>

        <div className="mt-1 flex items-center justify-between text-sm font-semibold text-slate-700">
          <span>${experience.price}</span>
          <span>{experience.rating} / 5</span>
        </div>

        <Link
          href={`/experiences/${experience.id}`}
          className="mt-2 inline-flex w-fit rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
