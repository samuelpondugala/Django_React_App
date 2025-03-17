import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'


export default function MyTextField(props) {
    const {label, placeholder, name, control}= props
    return (
        <Controller
        name={name}
        control={control}
        render = {({
            feild: {onChange, value},
            fieldState: {error},
            formState,

        }) => (
            <TextField 
                id="standard-basic" 
                label={label} 
                variant="standard"
                placeholder={placeholder}
            />
        )
    }
        />
  );
}
