import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
 
export const useLogin = () => {
  const [user, setuser] = useState("");

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      const { user } = jwtDecode(token);
      setuser(user)
    } else {
        console.log(user);
      window.location.href = "/login"
    }
  })
  return user;
};
