import React from 'react';
import { styled } from '@mui/material';
import { LOGO_URL } from '../consts/links';

const LogoImg = styled('img')({
  height: 30,
});

const Logo = () => <LogoImg src={LOGO_URL} />;

export default Logo;
