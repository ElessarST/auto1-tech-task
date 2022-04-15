import React, { Component } from 'react';
import { Grid } from '@mui/material';

class Home extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item>Filters</Grid>
        <Grid item>Cars</Grid>
      </Grid>
    );
  }
}

export default Home;
