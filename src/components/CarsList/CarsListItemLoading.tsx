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

const LIST_ITEM_WIDTH = 300;
const LIST_ITEM_HEIGHT = 15;

const CarsListItemLoading = () => (
  <CarsListItemLayout
    img={<Loading />}
    title={<Loading width={LIST_ITEM_WIDTH} height={LIST_ITEM_HEIGHT * 2} />}
    description={<Loading width={LIST_ITEM_WIDTH} height={LIST_ITEM_HEIGHT} />}
    link={<Loading width={LIST_ITEM_WIDTH / 2} height={LIST_ITEM_HEIGHT} />}
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
