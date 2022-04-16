import { useCallback, useState } from 'react';

type UseFavorites = {
  isFavorite: boolean;
  toggleFavorite: () => void;
};

const FAVORITE_KEY = 'favorite';
const VALUE_SEPARATOR = ',';

function getStoredValue(): string[] {
  return (localStorage.getItem(FAVORITE_KEY) ?? '').split(',');
}

function setStoredValue(value: string[]) {
  localStorage.setItem(FAVORITE_KEY, value.join(VALUE_SEPARATOR));
}

export function useFavorites(stockNumber: string): UseFavorites {
  const storedFavorites = getStoredValue();
  const [isFavorite, setFavorite] = useState(
    storedFavorites.includes(stockNumber),
  );

  const toggleFavorite = useCallback(() => {
    const newFavorite = !isFavorite;
    const storedValues = getStoredValue();
    setFavorite(newFavorite);
    const newStoredFavorites = newFavorite
      ? [...storedValues, stockNumber]
      : storedValues.filter((storedStock) => storedStock !== stockNumber);
    setStoredValue(newStoredFavorites);
  }, [isFavorite, stockNumber, setFavorite]);

  return { isFavorite, toggleFavorite };
}
