import React from "react";
import { InputForm } from "../Elements/Input";
import { Button } from "../Elements/Button";

export const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        type="text"
        placeholder="John Doe"
        name="name"
        text="Name"
        htmlFor="name"
      />
      <InputForm
        type="text"
        placeholder="example@gmail.com"
        name="email"
        text="Email"
        htmlFor="email"
      />
      <InputForm
        type="password"
        placeholder="******"
        name="password"
        text="Password"
        htmlFor="password"
      />
      <InputForm
        type="password"
        placeholder="******"
        name="password"
        text="Password"
        htmlFor="password"
      />
      <Button text="REGISTER" />
    </form>
  );
};
