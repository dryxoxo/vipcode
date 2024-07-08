import React from 'react'
import { FormLogin } from '../components/Fragments/FormLogin'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../components/Layouts/AuthLayout'
export const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
        <FormLogin/>
    </AuthLayout>
  )
}
