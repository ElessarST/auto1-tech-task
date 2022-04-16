import React from 'react';
import { UseData } from '../utils/useData';
import { Typography } from '@mui/material';

type Props<T> = {
  useDataState: UseData<T>;
  loadingComponent: React.ReactElement;
  children: (data: T) => React.ReactElement;
  errorMsg: string;
};

function UseDataLayout<T>({
  useDataState: { loading, data, error },
  loadingComponent,
  children,
  errorMsg,
}: Props<T>): React.ReactElement {
  if (loading) {
    return loadingComponent;
  }
  if (error) {
    return <Typography>{errorMsg}</Typography>;
  }
  return children(data as T);
}

export default UseDataLayout;
