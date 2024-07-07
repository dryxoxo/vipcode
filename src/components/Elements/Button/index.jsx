import React from 'react'

export const Button = (props) => {
    const {text} = props
  return (
    <div className="btn btn-primary w-full">{text}</div>
  )
}
