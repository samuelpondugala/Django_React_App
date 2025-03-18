import {React} from 'react'
import {Box, Typography} from '@mui/material'
import MyDatePickerField from './forms/MyDatePickerField'
import MySelectField from './forms/MySelectField'
import MyTextField from './forms/MyTextField'
import MyMultiLineField from './forms/MyMultiLineField'
import {Form, useForm} from 'react-hook-form'

const Create = () => {
  const {handleSubmit, reset, setValue, control} = useForm()
  const submission = (data) => console.log(data)
  
  return (
    <div>
      <form onSubmit={handleSubmit(submission)}>
      <Box sx ={{display: 'flex', backgroundColor: '#00003f', marginBottom: '10px'}}>
        <Typography sx = {{marginLeft: '20px', color: '#fff'}}>
          Create Records
        </Typography>
      </Box>
      <Box sx ={{display: 'flex', width: '100%', boxShadow: 3 ,padding: 4,flexDirection: 'column'}}>
        <Box sx ={{display: 'flex', justifyContent: 'space-around', marginBottom: '40px'}}>
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
            placeholder = "Status"
            width ={'30%'}
          />
          </Box>
          <Box sx={{display:'flex', justifyContent:'start', marginTop:'40px'}}> 
                <button type="submit" style={{backgroundColor: '#00003f', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
                   Submit
                </button>
          </Box>

          
          
        
      </Box>
      </form>
    </div>
  )
}


export default Create
