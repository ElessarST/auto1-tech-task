import React from 'react';
import { Box, Grid } from '@mui/material';
import Card from '../Card';

type Props = {
  img: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  link: React.ReactNode;
};

const CarsListItemLayout: React.FC<Props> = ({
  img,
  link,
  title,
  description,
}) => {
  return (
    <Card sx={{ width: '100%' }}>
      <Grid container columnSpacing={3}>
        <Grid item>
          <Box sx={{ width: 100, height: 75 }}>{img}</Box>
        </Grid>
        <Grid item>
          <Grid container direction="column" spacing={1}>
            <Grid item>{title}</Grid>
            <Grid item>{description}</Grid>
            <Grid item>{link}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CarsListItemLayout;
