import React, { PropsWithChildren } from 'react';
import { Button } from '@mui/material';

type Props = {
  disabled: boolean;
  onClick: () => void;
};

const PaginationButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <Button
      variant="text"
      color="primary"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default PaginationButton;
