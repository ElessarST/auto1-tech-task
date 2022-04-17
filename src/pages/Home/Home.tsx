import React from 'react';
import { Container, Grid } from '@mui/material';
import Cars from './Cars';
import Filters from './Filters/Filters';
import { CarsStateProvider } from './CarsState';

const Home = () => {
  return (
    <CarsStateProvider>
      <Container>
        <Grid container spacing={3}>
          <Grid item>
            <Filters />
          </Grid>
          <Grid item flex={1}>
            <Cars />
          </Grid>
        </Grid>
      </Container>
    </CarsStateProvider>
  );
};

export default Home;
