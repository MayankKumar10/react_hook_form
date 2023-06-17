import { Box, TextField } from '@mui/material'
import React from 'react'

type TextField = {
  label: string, 
  type: string,
  register: any,
  errors: string | undefined, 
  message: string, 
  value: boolean,
  pattern?:{
    value: string,
    message: string,
  },
  validate?: any[] | undefined,
}


export const TextFieldComponent = (props: TextField) => {

 const {label, type,register,errors, message, value, pattern, validate} = props

  const style = {
    TextField:{
      bgcolor: 'white', 
      color: 'black', 
      borderRadius: '12px' , 
      textAlign: 'center', 
      border: 'none'
    }
  }
  return (
    <Box sx={{padding:'0rem 0.5rem'}} className='field_container'>
          <label htmlFor={label}>{label}</label>
          <TextField type={type} sx={style.TextField} 
          {...register(label, 
            {
            required:{
              value: value,
              message: message
            },
             pattern:{
              value: pattern?.value,
              message: pattern?.message
            },
            
          }
          )}
           />
          {errors && <p className='errors'>{errors}</p>}
        </Box>
  )
}
