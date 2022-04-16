import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export type FiltersProps = {
  color?: string;
  manufacturer?: string;
  onColorChange?: (color: string) => void;
  onManufacturerChange?: (manufacturer: string) => void;
};

export const FiltersContext = React.createContext<FiltersProps>({});

export const FiltersProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [filters, setFilters] = useState({
    color: '',
    manufacturer: '',
  });
  const onChangeBase = useCallback(
    (update: Partial<typeof filters>) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        ...update,
      }));
    },
    [setFilters],
  );
  const onColorChange = useCallback(
    (color: string) => onChangeBase({ color }),
    [onChangeBase],
  );
  const onManufacturerChange = useCallback(
    (manufacturer: string) => onChangeBase({ manufacturer }),
    [onChangeBase],
  );
  const value = useMemo(
    () => ({
      color: filters.color,
      manufacturer: filters.manufacturer,
      onColorChange,
      onManufacturerChange,
    }),
    [filters, onColorChange, onManufacturerChange],
  );
  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
