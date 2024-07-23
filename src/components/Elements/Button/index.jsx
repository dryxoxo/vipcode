import React from "react";

export const Button = (props) => {
  const { text, onClick = () => {}, type="button", className="" } = props;
  return (
    <button
      className={`btn btn-primary ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
