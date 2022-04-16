import React, { PropsWithChildren } from 'react';
import { Button } from '@mui/material';

type Props = {
  visible: boolean;
  onClick: () => void;
};

const PaginationButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  visible,
  onClick,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <Button variant="text" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export default PaginationButton;
