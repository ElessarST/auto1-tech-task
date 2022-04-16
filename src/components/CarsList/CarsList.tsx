import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Car } from '../../types/Car';
import CarsListItem from './CarsListItem';

type Props = {
  cars: Car[];
};

const CarsList: React.FC<Props> = ({ cars }) => {
  if (!cars.length) {
    return <Typography variant="h2">No Cars Found</Typography>;
  }
  return (
    <Grid container direction="column" spacing={1}>
      {cars.map((car) => (
        <Grid item key={car.stockNumber}>
          <CarsListItem car={car} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CarsList;
