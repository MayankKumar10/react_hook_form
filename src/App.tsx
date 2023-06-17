import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import { Form1 } from './components/Form1'
import { Form2 } from './components/Form2'
import { Form3 } from './components/Form3'

type FormValue = {
  username: string,
  email: string,
  channel: string,
}

function App() {
  const [count, setCount] = useState(0)

  // const {register, control, handleSubmit, formState:{errors}} = useForm<FormValue>({
  //   defaultValues: {
  //     username: '',
  //     email: '',
  //     channel: '',
  //   },
  //   })

  // const onSubmit = (data: FormValue) =>{
  //  return console.log("FormData",data)
  // }
  
  return (
    <>
      <div>
        <h2>Hello Vite Typescript React hook form project</h2>
        {/* <h2>Dimple Loves me</h2> */}
        {/* <Form1 /> */}
        {/* <Form2 /> */}
        <Form3 />
      </div>
    </>
  )
}

export default App
