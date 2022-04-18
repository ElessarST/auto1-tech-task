import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const INITIAL_PAGE = 1;

export type CarsStateProps = {
  page: number;
  color: string;
  manufacturer: string;
  setColor: (color: string) => void;
  setManufacturer: (manufacturer: string) => void;
  setPage: (page: number) => void;
};

export const CarsState = React.createContext<CarsStateProps>({
  page: INITIAL_PAGE,
  color: '',
  manufacturer: '',
  setColor: () => null,
  setManufacturer: () => null,
  setPage: () => null,
});

export const CarsStateProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [carsState, setCarsState] = useState({
    color: '',
    manufacturer: '',
    page: INITIAL_PAGE,
  });
  const onChangeBase = useCallback(
    (update: Partial<typeof carsState>) => {
      setCarsState((prevFilters) => ({
        ...prevFilters,
        ...update,
      }));
    },
    [setCarsState],
  );
  const setColor = useCallback(
    (color: string) => onChangeBase({ color, page: INITIAL_PAGE }),
    [onChangeBase],
  );
  const setManufacturer = useCallback(
    (manufacturer: string) =>
      onChangeBase({ manufacturer, page: INITIAL_PAGE }),
    [onChangeBase],
  );
  const setPage = useCallback(
    (page: number) => onChangeBase({ page }),
    [onChangeBase],
  );
  const value = useMemo(
    () => ({
      page: carsState.page,
      color: carsState.color,
      manufacturer: carsState.manufacturer,
      setColor,
      setManufacturer,
      setPage,
    }),
    [carsState, setColor, setManufacturer, setPage],
  );
  return <CarsState.Provider value={value}>{children}</CarsState.Provider>;
};

export const useCarsState = () => useContext(CarsState);
