import React from 'react';
import { Grid } from '@mui/material';
import Logo from '../components/Logo';
import { HEADER_SIZE } from '../consts/sizes';
import HeaderLink from './HeaderLink';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={(theme) => ({ height: HEADER_SIZE, padding: theme.spacing(3) })}
      component="header">
      <Grid item>
        <Link to="/">
          <Logo />
        </Link>
      </Grid>
      <Grid item component="nav">
        <Grid container spacing={3}>
          <Grid item>
            <HeaderLink to="/purchase">Purchase</HeaderLink>
          </Grid>
          <Grid item>
            <HeaderLink to="/orders">My Orders</HeaderLink>
          </Grid>
          <Grid item>
            <HeaderLink to="/orders">Sell</HeaderLink>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
