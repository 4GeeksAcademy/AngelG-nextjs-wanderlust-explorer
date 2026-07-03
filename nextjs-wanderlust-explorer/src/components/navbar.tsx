"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/components/favorites-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiencias" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/profile", label: "Perfil" },
];

function isItemActive(itemHref: string, pathname: string) {
  if (itemHref === "/") {
    return pathname === "/";
  }

  if (itemHref === "/experiences") {
    return pathname.startsWith("/experiences");
  }

  return pathname === itemHref;
}

export function Navbar() {
  const pathname = usePathname();
  const { favoriteIds } = useFavorites();

  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-xl font-black tracking-tight text-slate-900">
          Wanderlust Labs
        </Link>

        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
            const active = isItemActive(item.href, pathname);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-orange-500 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
                {item.href === "/favorites" ? ` (${favoriteIds.length})` : ""}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
