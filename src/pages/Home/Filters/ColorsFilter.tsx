import React from 'react';
import { CircularProgress } from '@mui/material';
import { useData } from '../../../utils/useData';
import { getColors } from '../../../api/api';
import UseDataLayout from '../../../components/UseDataLayout';
import Filter from './Filter';
import { CarColor } from '../../../types/CarColor';
import { capitalize } from '../../../utils/capitalize';

type Props = {
  value: string | undefined;
  onChange: (value: string) => void;
};

const ColorsFilter: React.FC<Props> = ({ value, onChange }) => {
  const manufacturersState = useData(getColors);
  return (
    <UseDataLayout<CarColor[]>
      useDataState={manufacturersState}
      errorMsg="Failed to load colors options"
      loadingComponent={<CircularProgress />}
    >
      {(colors) => (
        <Filter
          value={value}
          options={colors.map(capitalize)}
          label="Color"
          onChange={onChange}
        />
      )}
    </UseDataLayout>
  );
};

export default ColorsFilter;
