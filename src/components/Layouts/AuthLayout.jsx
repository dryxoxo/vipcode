import React from 'react'
import { Link } from 'react-router-dom'
export const AuthLayout = (props) => {
    const { children, title, type } = props
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-blue-600 text-3xl mb-2">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please enter your details
                </p>
                {children}
                {type === "login" && (<p className='mt-5 text-center'>Dont Have An Account? <Link to="/register" className='font-bold text-blue-500'>Sign Up</Link></p>)}
                {type === "register" && (<p className='mt-5 text-center'>Already Have An Account? <Link to="/login" className='font-bold text-blue-500'>Sign In</Link></p>)}
            </div>
        </div>

    )
}
