import { Suspense } from "react";
import { ExperiencesClient } from "@/components/experiences-client";

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto flex w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
          <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-slate-700">
            Cargando experiencias...
          </div>
        </main>
      }
    >
      <ExperiencesClient />
    </Suspense>
  );
}
