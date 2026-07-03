"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface FavoritesContextValue {
  favoriteIds: number[];
  toggleFavorite: (experienceId: number) => void;
  isFavorite: (experienceId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = useCallback((experienceId: number) => {
    setFavoriteIds((current) => {
      if (current.includes(experienceId)) {
        return current.filter((id) => id !== experienceId);
      }

      return [...current, experienceId];
    });
  }, []);

  const isFavorite = useCallback(
    (experienceId: number) => favoriteIds.includes(experienceId),
    [favoriteIds],
  );

  const value = useMemo(
    () => ({ favoriteIds, toggleFavorite, isFavorite }),
    [favoriteIds, toggleFavorite, isFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider.");
  }

  return context;
}
