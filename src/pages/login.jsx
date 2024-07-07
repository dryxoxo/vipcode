import React from 'react'
import { LoginLayout } from '../components/Layouts/LoginLayout'
import { FormLogin } from '../components/Fragments/FormLogin'
import { Link } from 'react-router-dom'
export const LoginPage = () => {
  return (
    <LoginLayout title="Login">
        <FormLogin/>
        <p className='mt-5 text-center'>Dont Have An Account? <Link to="/register" className='font-bold text-blue-500'>Sign Up</Link></p>
    </LoginLayout>
  )
}
