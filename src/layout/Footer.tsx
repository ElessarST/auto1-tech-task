import React from 'react';
import { Grid, Typography } from '@mui/material';
import { FOOTER_SIZE } from '../consts/sizes';

const Footer = () => (
  <Grid
    container
    justifyContent="center"
    alignItems="center"
    sx={(theme) => ({ height: FOOTER_SIZE, padding: theme.spacing(3) })}
    component="footer"
  >
    <Typography variant="caption">&copy; AUTO1 Group 2022</Typography>
  </Grid>
);

export default Footer;
