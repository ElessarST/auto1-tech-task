import React from 'react';
import { Car } from '../../types/Car';
import Card from '../../components/Card';
import { Button, Grid, Typography } from '@mui/material';
import { useFavorites } from './useFavorites';

type Props = {
  car: Car;
};

const CarFavorites: React.FC<Props> = ({ car }) => {
  const { isFavorite, toggleFavorite } = useFavorites(
    car.stockNumber.toString(),
  );
  return (
    <Card>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography>
            If you like this car, click the button and save it in your
            collection of favourite items.
          </Typography>
        </Grid>
        <Grid item alignSelf="flex-end">
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={toggleFavorite}>
            {isFavorite ? 'Delete' : 'Save'}
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CarFavorites;
