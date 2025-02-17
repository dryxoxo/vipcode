import React, { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;

  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-45"
      placeholder={placeholder}
      name={name}
      ref={ref}
    />
  )
})
