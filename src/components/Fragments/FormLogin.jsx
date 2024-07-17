import React, { useEffect, useRef, useState } from "react";
import { InputForm } from "../Elements/Input";
import { Button } from "../Elements/Button";
import { login } from "../../services/login.service";

export const FormLogin = () => {
  const [LoginFail, setLoginFail] = useState("")

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('username', event.target.username.value)
    localStorage.setItem('password', event.target.password.value)
    const payload = {
      username: event.target.username.value,
      password: event.target.password.value
    }

    login(payload, (status, res) => {
      if (status) {
        localStorage.setItem('token', res)
        window.location.href = "/products"
      } else { setLoginFail(res) }
    })

    console.log(payload)
  };


  const usernameRef = useRef(null)

  useEffect(() => {
    usernameRef.current.focus()
  }, [])
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="text"
        placeholder="example@gmail.com"
        name="username"
        text="username"
        htmlFor="username"
        ref={usernameRef}
      />
      <InputForm
        type="password"
        placeholder="******"
        name="password"
        text="Password"
        htmlFor="password"
      />
      {LoginFail && <p className="text-red-500 text-center mb-5">{LoginFail}</p>}
      <Button text="SIGN IN" type="submit" />
    </form>
  );
};