import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Controller} from 'react-hook-form'


export default function MySelectField(props) {
    const [age, setAge] = React.useState('');
    const {label, width, name, control}= props
    const handleChange = (event) => {
        setAge(event.target.value);
  };

  return (
    <div>
      
      <FormControl variant="standard" sx = {{width: {width}}}>
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render = {({
            field: {onChange, value},
            fieldState: {error},
            formState,

        }) => (
            <Select
                
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Open</MenuItem>
                <MenuItem value={20}>In Progress</MenuItem>
                <MenuItem value={30}>Completed</MenuItem>
            </Select>
        )
    }
        />
        
        
      </FormControl>
    </div>
  );
}
