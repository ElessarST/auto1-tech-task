import React, { useId } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type Props = {
  value: string | undefined;
  options: string[];
  label: string;
  onChange: (value: string) => void;
};

const Filter: React.FC<Props> = ({ onChange, options, value, label }) => {
  const id = useId();
  const labelId = useId();
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value as string)}>
        {options.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
