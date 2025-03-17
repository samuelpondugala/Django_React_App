import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MyTextFields() {
    const {label, placeholder}= props
    return (
    
        <TextField id="standard-basic" 
        label={label} 
        variant="standard"
        placeholder={placeholder}
        />
    
  );
}
