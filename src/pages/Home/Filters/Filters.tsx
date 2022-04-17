import React from 'react';
import { Grid } from '@mui/material';
import Card from '../../../components/Card';
import ManufacturerFilter from './ManufacturerFilter';
import ColorsFilter from './ColorsFilter';
import { useCarsState } from '../CarsState';

const Filters = () => {
  const { color, manufacturer, setManufacturer, setColor } = useCarsState();
  return (
    <Card sx={{ width: 300 }}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <ManufacturerFilter value={manufacturer} onChange={setManufacturer} />
        </Grid>
        <Grid item>
          <ColorsFilter value={color} onChange={setColor} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Filters;
