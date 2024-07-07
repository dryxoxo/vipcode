import React from 'react'
import { RegisterLayout } from '../components/Layouts/RegisterLayout'
import { FormRegister } from '../components/Fragments/FormRegister'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <RegisterLayout title="Register">
        <FormRegister/>
        <p className='mt-5 text-center'>Already Have Account? <Link to="/login" className='font-bold text-blue-500'>Sign In</Link></p>
    </RegisterLayout>
  )
}
