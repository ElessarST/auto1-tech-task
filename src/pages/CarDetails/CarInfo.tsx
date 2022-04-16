import React from 'react';
import { Car } from '../../types/Car';
import { Grid, Typography } from '@mui/material';
import { getCarDescription } from '../../utils/getCarDescription';
import { getCarName } from '../../utils/getCarName';

type Props = {
  car: Car;
};

const CarInfo: React.FC<Props> = ({ car }) => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h1">{getCarName(car)}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{getCarDescription(car)}</Typography>
      </Grid>
      <Grid item>
        <Typography>
          This car is currently available and can be delivered as soon as
          tomorrow morning. Please be aware that delivery times shown in this
          page are not definitive and may change due to bad weather conditions.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CarInfo;
