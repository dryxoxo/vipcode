import React from "react";

export const Label = (props) => {
  const { htmlFor, text } = props;

  return (
    <label htmlFor="" className="block text-slate-700 text-sm font-bold mb-2">
      {text}
    </label>
  );
};
