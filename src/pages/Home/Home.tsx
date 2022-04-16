import React from 'react';
import { Container, Grid } from '@mui/material';
import Cars from './Cars';
import Filters from './Filters/Filters';
import { FiltersProvider } from './Filters/FiltersContext';

const Home = () => {
  return (
    <FiltersProvider>
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
    </FiltersProvider>
  );
};

export default Home;
