import { Box } from '@mui/material';
import { FOOTER_SIZE, HEADER_SIZE } from '../consts/sizes';
import React, { PropsWithChildren } from 'react';

const Main: React.FC<PropsWithChildren<{}>> = ({ children }) => (
  <Box
    sx={(theme) => ({
      minHeight: `calc(100vh - ${HEADER_SIZE + FOOTER_SIZE}px)`,
      padding: theme.spacing(3),
    })}
  >
    {children}
  </Box>
);

export default Main;
