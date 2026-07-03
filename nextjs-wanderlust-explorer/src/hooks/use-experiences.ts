import { useMemo } from "react";
import { experiences } from "@/data/experiences";
import type { Experience, ExperienceCategory } from "@/types/experience";

interface UseExperiencesParams {
  searchTerm: string;
  category: ExperienceCategory | "";
  destination: string;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function useExperiences({
  searchTerm,
  category,
  destination,
}: UseExperiencesParams): Experience[] {
  return useMemo(() => {
    const normalizedSearch = searchTerm.trim();
    const searchRegex = normalizedSearch
      ? new RegExp(escapeRegExp(normalizedSearch), "i")
      : null;

    return experiences.filter((experience) => {
      const matchesSearch = searchRegex ? searchRegex.test(experience.title) : true;
      const matchesCategory = category ? experience.category === category : true;
      const matchesDestination = destination
        ? experience.destination === destination
        : true;

      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [searchTerm, category, destination]);
}
