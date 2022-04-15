import React, { PropsWithChildren } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
};

const HeaderLink: React.FC<PropsWithChildren<Props>> = ({ to, children }) => (
  <Button to={to} component={Link} variant="text" color="secondary">
    {children}
  </Button>
);

export default HeaderLink;
