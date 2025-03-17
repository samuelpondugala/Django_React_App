import {React} from 'react'
import {Box, Typography} from '@mui/material'
import MyDatePickerField from './forms/MyDatePickerField'
import MySelectField from './forms/MySelectField'
import MyTextField from './forms/MyTextField'
import MyMultiLineField from './forms/MyMultiLineField'
import {useForm} from 'react-hook-form'

const Create = () => {
  const {handleSubmit, reset, setValue, control} = useForm()
  return (
    <div>
      <Box sx ={{display: 'flex', backgroundColor: '#00003f', marginBottom: '10px'}}>
        <Typography sx = {{marginLeft: '20px', color: '#fff'}}>
          Create Records
        </Typography>
      </Box>
      <Box sx ={{display: 'flex', width: '100%', boxShadow: 3 ,padding: 4,flexDirection: 'column'}}>
        <Box sx ={{display: 'flex', justifyContent: 'space-around'}}>
          <MyTextField 
            label="Name" 
            name={"name"}
            control={control}
            placeholder="Enter Name"
            width ={'30%'}
          />
          <MyDatePickerField
            label="Start Date"
            name="start_date"
            control={control}
            width ={'30%'}
          
          />
          <MyDatePickerField
            label="End Date"
            name="end_date"
            control={control}
            width ={'30%'}
          
          />
        </Box>
        <Box sx ={{display: 'flex', justifyContent: 'space-around'}}>
          <MyMultiLineField
            label="Comments" 
            name="comments"
            control={control}
            placeholder="Provide project comments"
            width ={'30%'}
          />
          <MySelectField
            label="Status"
            name="status"
            control={control}
            width ={'30%'}
          
          />
          </Box>
          <Box sx = {{width: '30%'}}>

          </Box >
          
          
        
      </Box>
    </div>
  )
}


export default Create
