import React, { useCallback, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useData } from '../../hooks/useData';
import { getCars } from '../../api/api';
import { scrollToTop } from '../../utils/scrollToTop';
import UseDataLayout from '../../components/DataLayout';
import CarsListLoading from '../../components/CarsList/CarsListItemLoading';
import { GetCarsResponse } from '../../api/types';
import CarsContent from './CarsContent';
import { useFilters } from './Filters/FiltersContext';

const Cars = () => {
  const [page, setPage] = useState(1);
  const { color, manufacturer } = useFilters();
  const onPageChange = useCallback(
    (newPage: number) => {
      scrollToTop();
      setPage(newPage);
    },
    [setPage],
  );
  const fetchCars = useCallback(
    () => getCars(page, color, manufacturer),
    [page, color, manufacturer],
  );
  const carsState = useData(fetchCars, [fetchCars]);
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">Available Cars</Typography>
      </Grid>
      <Grid item>
        <UseDataLayout<GetCarsResponse>
          useDataState={carsState}
          errorMsg="Failed to fetch cars"
          loadingComponent={<CarsListLoading />}>
          {(data) => (
            <CarsContent
              cars={data.cars}
              totalCount={data.totalCarsCount}
              totalPages={data.totalPageCount}
              page={page}
              onPageChange={onPageChange}
            />
          )}
        </UseDataLayout>
      </Grid>
    </Grid>
  );
};

export default Cars;
