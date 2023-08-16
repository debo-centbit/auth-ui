import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type InputFormProps = {
  label: string;
  width?: string;
  borderRadius?: string; 
};

const InputForm = (props: InputFormProps) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1.5, width: props.width || '25ch' }, 
        borderRadius: props.borderRadius || '4px', 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={props.label} variant="outlined" />
    </Box>
  );
};

export default InputForm;
