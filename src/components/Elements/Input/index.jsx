import React from "react";
import { Input } from "./Input";
import { Label } from "./Label";

export const InputForm = (props) => {
  const { type, placeholder, name, text, htmlFor } = props;

  return (
    <div className="mb-6">
      <Label text={text} htmlFor={htmlFor} />
      <Input name={name} placeholder={placeholder} type={type} />
    </div>
  );
};
