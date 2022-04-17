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

export function useFavorites(stockNumber: number): UseFavorites {
  const stock = stockNumber.toString();
  const storedFavorites = getStoredValue();
  const [isFavorite, setFavorite] = useState(storedFavorites.includes(stock));

  const toggleFavorite = useCallback(() => {
    const newFavorite = !isFavorite;
    const storedValues = getStoredValue();
    setFavorite(newFavorite);
    const newStoredFavorites = newFavorite
      ? [...storedValues, stock]
      : storedValues.filter((storedStock) => storedStock !== stock);
    setStoredValue(newStoredFavorites);
  }, [isFavorite, stock, setFavorite]);

  return { isFavorite, toggleFavorite };
}
