import React, { useCallback } from 'react';
import { Grid, Typography } from '@mui/material';
import { useData } from '../../utils/useData';
import { getCars } from '../../api/api';
import { scrollToTop } from '../../utils/scrollToTop';
import UseDataLayout from '../../components/UseDataLayout';
import CarsListLoading from '../../components/CarsList/CarsListItemLoading';
import { GetCarsResponse } from '../../api/types';
import CarsContent from './CarsContent';
import { useCarsState } from './CarsState';

const Cars = () => {
  const { color, manufacturer, page, setPage } = useCarsState();

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

  const carsState = useData(fetchCars);
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">Available Cars</Typography>
      </Grid>
      <Grid item>
        <UseDataLayout<GetCarsResponse>
          useDataState={carsState}
          errorMsg="Failed to fetch cars"
          loadingComponent={<CarsListLoading />}
        >
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
