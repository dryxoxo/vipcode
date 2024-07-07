import React from 'react'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className='text-3xl font-bold'>Ooops!</h1>
        <p className='my-3 text-slate-700'>Sorry, an unexpected error has occured</p>
        <p className='text-red-600'>{error.statusText || error.message}</p>
    </div>
  )
}
