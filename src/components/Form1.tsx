import { DevTool } from '@hookform/devtools';
import { TextField, styled } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';

type FormValue = {
  username: string,
  email: string,
  channel: string,
}

const style = {
  TextField:{
    bgcolor: 'white', 
    color: 'black', 
    borderRadius: '12px' , 
    textAlign: 'center', 
    height: '2rem',
    padding: '0rem .5rem',
    border: 'none',
  }
}

export const Form1 = () => {
  const {handleSubmit, control, register, formState:{errors}} = useForm <FormValue>({defaultValues:{
    username: '',
    email: '',
    channel: '',
  }})

  const onSubmit = (data: FormValue) =>{
    console.log(data);
    
  }

  return (
    <div>
      <form className='form-container' onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='field_container'>
          <label >
            User name:
          </label>
          <TextField type='text' sx={style.TextField}  id="username" {...register('username', {
            required:{
              value: true,
              message: "Please enter your username"
            }
          })} />
          <p className='errors'>{errors?.username?.message}</p>
          </div>
          <div className='field_container'>
          <label >
            Email:
          </label>
          <TextField type='email' sx={style.TextField} id="email" {...register('email', {
            required:{
              value: true,
              message: "Please enter your Email Address"
            },
            pattern:{
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Enter your email address"
            },
            validate:{
              notAdmin: (fieldValue) =>{
                return (
                  fieldValue !== 'admin@example.com' || "Enter a Different Email Address"
                );
              },
              notBlackListed: (fieldValue) =>{
                return (
                  !fieldValue.endsWith("baddomain.com") ||
                  "This domain is not supported"
                );
              }
            }
          })} />
          <p className='errors'>{errors?.email?.message}</p>
          </div>
          <div className='field_container'>
          <label >
            Channel:
          </label>
          <TextField type='text' sx={style.TextField} id="channel" {...register('channel', {
            required:{
              value: true,
              message: "Please enter your channel"
            }
          })} />
          <p className='errors'>{errors?.channel?.message}</p>
          </div>

          <button>Submit</button>
        </form>
        <DevTool control={control} />
    </div>
  )
}
