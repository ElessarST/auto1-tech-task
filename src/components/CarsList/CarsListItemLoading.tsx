import React from 'react';
import { Box, Grid } from '@mui/material';
import CarsListItemLayout from './CarsListItemLayout';

type Props = {
  width?: number;
  height?: number;
};

export const Loading: React.FC<Props> = ({ width, height }) => (
  <Box
    sx={(theme) => ({
      backgroundColor: theme.palette.secondaryBackground,
      height: height || '100%',
      width: width || '100%',
    })}
  />
);

const CarsListItemLoading = () => (
  <CarsListItemLayout
    img={<Loading />}
    title={<Loading width={300} height={30} />}
    description={<Loading width={300} height={15} />}
    link={<Loading width={150} height={15} />}
  />
);

const CarsListLoading = () => (
  <Grid container direction="column" spacing={1}>
    <Grid item>
      <CarsListItemLoading />
    </Grid>
    <Grid item>
      <CarsListItemLoading />
    </Grid>
    <Grid item>
      <CarsListItemLoading />
    </Grid>
  </Grid>
);

export default CarsListLoading;
