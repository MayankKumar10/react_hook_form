import { DevTool } from '@hookform/devtools'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { TextFieldComponent } from './TextFieldComponent'


type FormValues = {
  username: string,
  email: string,
  password: string,
  socialMedia:{
    twitter: string,
    facebook: string,
  },
  phoneNum: string[],
  phnNum: {
    number: string
  }[],
  age: number
}

const style = {
  TextField:{
    bgcolor: 'white', 
    color: 'black', 
    borderRadius: '12px' , 
    textAlign: 'center', 
    height: '2rem',
    padding: '0rem .5rem',
    border: 'none'
  }
}

export const Form2 = () => {
  
  const {register ,control,handleSubmit, formState:{errors}} = useForm<FormValues>(
    {
      defaultValues:{
    username: '',
    email: '',
    password: '',
    socialMedia:{
      twitter: '',
      facebook: '',
    },
    phoneNum: ["", ""],
    phnNum:[{
      number: ''
    }],
    age: 0,
  }})
  
  

  const onSubmit = (data: FormValues) =>{
    console.log(data)
  }

  return (
    <div>
      <form className='' onSubmit={handleSubmit(onSubmit)} noValidate>

        <TextFieldComponent label={'username'} type={'text'} register={register} errors={errors?.username?.message} message={"Please enter your username"} value={true} />

        <TextFieldComponent label={'email'} type={'text'} register={register} errors={errors?.email?.message} message={"Please enter your email"} value={true} />

        <TextFieldComponent label={'password'} type={'password'} register={register} errors={errors?.password?.message} message={"Please enter your password"} value={true} />

        <button >Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}
