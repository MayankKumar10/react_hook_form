import { DevTool } from '@hookform/devtools';
import { TextField, styled } from '@mui/material';
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';

type FormValue = {
  username: string,
  email: string,
  channel: string,
  socialMedia:{
    twitter: string,
    facebook: string,
  },
  phoneNum: string[],
  phnNum: {
    number: string,
  }[],
  age: number,
  dob: Date,
}

const style = {
  TextField:{
    bgcolor: 'white', 
    color: 'black', 
    borderRadius: '12px' , 
    textAlign: 'center', 
    
    padding: '0rem .5rem',
    border: 'none',
  }
}

export const Form3 = () => {
  const {handleSubmit, control, formState, reset, register, formState:{errors}} = useForm <FormValue>({defaultValues:{
    username: 'Mayank',
    email: '',
    channel: '',
    socialMedia:{
      twitter: '',
      facebook: '',
    },
    phoneNum: ['',''],
    phnNum: [{
      number: '',
    }],
    age: 0,
    dob: new Date(),
  }})

  const { fields, append, remove } = useFieldArray({
    name: 'phnNum',
    control,
  })

  const onSubmit = (data: FormValue) =>{
    console.log(data);
    
  }

  const {isDirty, isValid} = formState

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

          <div className='field_container'>
          <label >
            Twitter:
          </label>
          <TextField type='text' sx={style.TextField} id="channel" {...register('socialMedia.twitter', {
            required:{
              value: true,
              message: "Please enter your twitter account"
            }
          })} />
          <p className='errors'>{errors?.socialMedia?.twitter?.message}</p>
          </div>

          <div className='field_container'>
          <label >
            Facebook:
          </label>
          <TextField type='text' sx={style.TextField} id="facebook" {...register('socialMedia.facebook', {
            required:{
              value: true,
              message: "Please enter your facebook account"
            }
          })} />
          <p className='errors'>{errors?.socialMedia?.facebook?.message}</p>
          </div>

          <div className='field_container'>
          <label >
            phoneNumber one:
          </label>
          <TextField type='text' sx={style.TextField} id="phone number" {...register('phoneNum.0', {
            valueAsNumber: true,
            required:{
              value: true,
              message: "Please enter your First Phone Number "
            }
          })} />
          {errors.phoneNum && <p className='errors'>{errors?.phoneNum[0]?.message}</p>}
          </div>

          <div className='field_container'>
          <label >
            phoneNumber two:
          </label>
          <TextField type='text' sx={style.TextField} id="phone number" {...register('phoneNum.1', {
            valueAsNumber: true,
            required:{
              value: true,
              message: "Please enter your Second Phone Number "
            }
          })} />
          {errors.phoneNum && <p className='errors'>{errors?.phoneNum[1]?.message}</p>}
          </div>

          <div className='field_container'>
          <label >
            List of phone numbers:
          </label>

          {
            fields.map((field, index)=> <><TextField key={field.id} type='text' sx={style.TextField} id="facebook" {...register(`phnNum.${index}.number` , {
              valueAsNumber: true,
              required:{
                value: true,
                message: "Please enter your dynamic number"
              }
            })} />
            {index>0 && <button type='button' onClick={()=>remove(index)}>remove</button>}
            </>
            )

          }
          <button onClick={()=>append({number:''}) }>Add Number</button>
          
          </div>

          <div className='field_container'>
          <label >
            Age:
          </label>
          <TextField type='number' sx={style.TextField} id="age" {...register('age', {
            valueAsNumber: true,
            required:{
              value: true,
              message: "Please enter your age"
            }
          })} />
          <p className='errors'>{errors?.age?.message}</p>
          </div>

          <div className='field_container'>
          <label >
            Dob:
          </label>
          <input type='date' style={style.TextField} id="dob" {...register('dob', {
            valueAsDate: true,
            required:{
              value: true,
              message: "Please enter your DOB"
            }
          })} />
          <p className='errors'>{errors?.dob?.message}</p>
          </div>

          <button onClick={()=>reset()}>Reset</button>

          <button disabled={isDirty || isValid }>Submit</button>
          
        </form>
        <DevTool control={control} />
    </div>
  )
}
