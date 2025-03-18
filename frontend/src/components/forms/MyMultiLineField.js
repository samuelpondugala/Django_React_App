import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function MyMultiLineField(props) {
  const {label, placeholder, width, name, control}= props
  return (
      <Controller
      name={name}
      control={control}
      render = {({
          field: {onChange, value},
          fieldState: {error},
          formState,

      }) => (
          <TextField
            sx = {{width: {width}}}
            id="standard-multiline-static"
            label={label}
            multiline
            rows={1}
            
            variant="standard"
            placeholder = {placeholder}
          />
      )
      }
      />
  );
}
