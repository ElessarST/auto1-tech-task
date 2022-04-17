import React from 'react';
import { useData } from '../../../utils/useData';
import { getManufacturers } from '../../../api/api';
import UseDataLayout from '../../../components/UseDataLayout';
import { Manufacturer } from '../../../types/Manufacturer';
import { CircularProgress } from '@mui/material';
import Filter from './Filter';

type Props = {
  value: string | undefined;
  onChange: (value: string) => void;
};

const ManufacturerFilter: React.FC<Props> = ({ value, onChange }) => {
  const manufacturersState = useData(getManufacturers);
  return (
    <UseDataLayout<Manufacturer[]>
      useDataState={manufacturersState}
      errorMsg="Failed to load manufacturer options"
      loadingComponent={<CircularProgress />}>
      {(manufacturers) => (
        <Filter
          value={value}
          options={manufacturers.map((m) => m.name)}
          label="Manufacturer"
          onChange={onChange}
        />
      )}
    </UseDataLayout>
  );
};

export default ManufacturerFilter;
