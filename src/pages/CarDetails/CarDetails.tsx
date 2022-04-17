import React, { useCallback } from 'react';
import { CircularProgress, Container, Grid } from '@mui/material';
import { useData } from '../../utils/useData';
import { getCar } from '../../api/api';
import { useParams } from 'react-router-dom';
import UseDataLayout from '../../components/UseDataLayout';
import { Car } from '../../types/Car';
import CarInfo from './CarInfo';
import CarFavorites from './CarFavorites';
import { getCarName } from '../../utils/getCarName';

type PageParams = {
  stockNumber: string;
};

const CarDetails = () => {
  const { stockNumber } = useParams<PageParams>();
  const fetchCar = useCallback(() => getCar(stockNumber), [stockNumber]);
  const carData = useData(fetchCar);
  return (
    <UseDataLayout<Car>
      useDataState={carData}
      loadingComponent={<CircularProgress />}
      errorMsg="Failed to fetch car info"
    >
      {(car) => (
        <Grid container direction="column" spacing={3} alignItems="center">
          <Grid item>
            <img src={car.pictureUrl} alt={getCarName(car)} />
          </Grid>
          <Grid item>
            <Container sx={{ maxWidth: 800 }} maxWidth={false}>
              <Grid container direction="row" spacing={3}>
                <Grid item xs={7}>
                  <CarInfo car={car} />
                </Grid>
                <Grid item xs={5}>
                  <CarFavorites car={car} />
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      )}
    </UseDataLayout>
  );
};

export default CarDetails;
