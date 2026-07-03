"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { availableCategories } from "@/data/experiences";
import type { ExperienceCategory } from "@/types/experience";

function parseCategory(value: string | null): ExperienceCategory | "" {
  if (!value) {
    return "";
  }

  return availableCategories.includes(value as ExperienceCategory)
    ? (value as ExperienceCategory)
    : "";
}

interface UpdateQueryInput {
  search?: string;
  category?: ExperienceCategory | "";
  destination?: string;
}

export function useExperienceFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchTerm = searchParams.get("search") ?? "";
  const category = parseCategory(searchParams.get("category"));
  const destination = searchParams.get("destination") ?? "";

  function updateQuery(next: UpdateQueryInput) {
    const params = new URLSearchParams(searchParams.toString());

    const nextSearch = next.search ?? searchTerm;
    const nextCategory = next.category ?? category;
    const nextDestination = next.destination ?? destination;

    if (nextSearch.trim()) {
      params.set("search", nextSearch.trim());
    } else {
      params.delete("search");
    }

    if (nextCategory) {
      params.set("category", nextCategory);
    } else {
      params.delete("category");
    }

    if (nextDestination) {
      params.set("destination", nextDestination);
    } else {
      params.delete("destination");
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return {
    searchTerm,
    category,
    destination,
    setSearchTerm: (nextValue: string) => updateQuery({ search: nextValue }),
    setCategory: (nextValue: ExperienceCategory | "") =>
      updateQuery({ category: nextValue }),
    setDestination: (nextValue: string) => updateQuery({ destination: nextValue }),
  };
}
