import React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const LanguageSelect = (props: any) => {
  const {value, onChange} = props
  const options: string[] = props.options;
  
  return (
    <FormControl {...props} sx={{ minWidth: 80 }}>
      <InputLabel id='select'>Lang</InputLabel>
      
      <Select
        labelId='select'
        id='demo-simple-select'
        value={value}
        onChange={event=> onChange(event.target.value)}
        label='Age'
      > <MenuItem  value=''>{'...'}</MenuItem>
        {options.map((option: string, id) => {
          return <MenuItem key={id} value={option}>{option}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
