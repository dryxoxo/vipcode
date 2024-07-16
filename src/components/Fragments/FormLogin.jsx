import React, { useEffect, useRef } from "react";
import { InputForm } from "../Elements/Input";
import { Button } from "../Elements/Button";

export const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href="/products"
  };

  const emailRef = useRef(null)

  useEffect(()=>{
    emailRef.current.focus()
  },[])
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="text"
        placeholder="example@gmail.com"
        name="email"
        text="Email"
        htmlFor="email"
        ref={emailRef}
      />
      <InputForm
        type="password"
        placeholder="******"
        name="password"
        text="Password"
        htmlFor="password"
      />
      <Button text="SIGN IN" type="submit" />
    </form>
  );
};