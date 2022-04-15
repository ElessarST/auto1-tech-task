import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Logo from '../components/Logo';
import InlineLink from '../components/InlineLink';

const NotFound = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container direction="column" spacing={3} alignItems="center">
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Typography variant="h1">404 - Not Found</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            Sorry, the page you are looking for does not exist.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">
            You can always go back to the{' '}
            <InlineLink to="/">homepage</InlineLink>.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
