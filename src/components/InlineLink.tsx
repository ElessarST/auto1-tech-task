import React, { PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

type Props = {
  to: string;
};

const styles: SxProps<Theme> = {
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
};

const InlineLink: React.FC<PropsWithChildren<Props>> = ({ to, children }) => (
  <Link to={to} component={RouterLink} color="primary" sx={styles}>
    {children}
  </Link>
);

export default InlineLink;
