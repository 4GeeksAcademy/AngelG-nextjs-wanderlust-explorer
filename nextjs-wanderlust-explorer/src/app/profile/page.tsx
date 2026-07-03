"use client";

import { useFavorites } from "@/components/favorites-provider";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
            AL
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Ari Lopez</h1>
            <p className="text-slate-600">Travel lover, foodie y exploradora cultural.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Favoritos guardados
            </p>
            <p className="mt-2 text-3xl font-black text-slate-900">{favoriteIds.length}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Nivel de viajera
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900">Explorer Pro</p>
          </div>
        </div>
      </section>
    </main>
  );
}
