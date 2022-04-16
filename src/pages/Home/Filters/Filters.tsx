import React from 'react';
import { Grid } from '@mui/material';
import Card from '../../../components/Card';
import ManufacturerFilter from './ManufacturerFilter';
import ColorsFilter from './ColorsFilter';
import { useFilters } from './FiltersContext';

const Filters = () => {
  const { color, manufacturer, onManufacturerChange, onColorChange } =
    useFilters();
  return (
    <Card sx={{ width: 300 }}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <ManufacturerFilter
            value={manufacturer}
            onChange={onManufacturerChange!}
          />
        </Grid>
        <Grid item>
          <ColorsFilter value={color} onChange={onColorChange!} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Filters;
