import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
      <section className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-14 shadow-sm sm:px-10 sm:py-20">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-300/35 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-cyan-300/30 blur-3xl" />

        <div className="relative max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Wanderlust Labs
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
            Descubre experiencias unicas alrededor del mundo
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Explora tours, aventura, bienestar y cultura con filtros compartibles
            por URL. Encuentra tu proxima historia en minutos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/experiences"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Ir al explorador
            </Link>
            <Link
              href="/profile"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Ver perfil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
