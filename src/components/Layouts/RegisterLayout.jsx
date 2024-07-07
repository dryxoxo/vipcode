import React from 'react'

export const RegisterLayout = (props) => {
    const {title, children} = props
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
      </div>
    </div>
  )
}
