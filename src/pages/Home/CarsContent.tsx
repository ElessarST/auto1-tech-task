import React from 'react';
import { Car } from '../../types/Car';
import { Grid, Typography } from '@mui/material';
import { DEFAULT_PAGE_SIZE } from '../../consts/api';
import CarsList from '../../components/CarsList/CarsList';
import Pagination from '../../components/Pagination/Pagination';

type Props = {
  cars: Car[];
  totalCount: number;
  totalPages: number;
  page: number;
  onPageChange: (page: number) => void;
};

const CarsContent: React.FC<Props> = ({
  cars,
  totalPages,
  totalCount,
  page,
  onPageChange,
}) => {
  const hasCars = cars.length > 0;
  const showingCount =
    cars.length < DEFAULT_PAGE_SIZE ? cars.length : DEFAULT_PAGE_SIZE * page;
  return (
    <Grid container direction="column" spacing={3}>
      {hasCars && (
        <Grid item>
          <Typography variant="subtitle1">
            Showing {showingCount} of {totalCount} results
          </Typography>
        </Grid>
      )}
      <Grid item>
        <CarsList cars={cars} />
      </Grid>
      {hasCars && (
        <Grid item>
          <Pagination
            page={page}
            pageCount={totalPages}
            onPageChange={onPageChange}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default CarsContent;
