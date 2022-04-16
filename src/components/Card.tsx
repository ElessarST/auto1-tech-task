import React, { PropsWithChildren } from 'react';
import { Card as MuiCard, CardContent, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

type Props = {
  sx?: SxProps<Theme>;
};

const Card: React.FC<PropsWithChildren<Props>> = ({ children, sx }) => (
  <MuiCard sx={sx} variant="outlined" square>
    <CardContent>{children}</CardContent>
  </MuiCard>
);

export default Card;
