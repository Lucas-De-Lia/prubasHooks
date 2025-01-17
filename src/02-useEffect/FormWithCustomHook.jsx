import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";



export const FormWithCustomHook = () => {
    const {formState,onInputChange,username,email,password,onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });
    useEffect(() => {
        //console.log('cambio el formstate');
    },[formState]);
    useEffect(() => {
       // console.log('cambio el email');
    },[email]);



  return (
    <>
        <h1>Formulario con custome hook</h1>
        <hr/>

        <input
            type='text'
            className='form-control'
            placeholder='Username'
            name = 'username'
            value={ username }
            onChange={onInputChange}
        />
         <input
            type='text'
            className='form-control mt-2'
            placeholder='email@google.com'
            name = 'email'
            value={ email }
            onChange={onInputChange}
        />
          <input
            type='password'
            className='form-control mt-2'
            placeholder='contraseña'
            name = 'password'
            value={ password }
            onChange={onInputChange}
        />
         <button onClick = {onResetForm}className='btn btn-primary mt-2'>Borrar</button>
    </>
   
  )
}
