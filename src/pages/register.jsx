import React from 'react'
import { FormRegister } from '../components/Fragments/FormRegister'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../components/Layouts/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
        <FormRegister/>
    </AuthLayout>
  )
}
