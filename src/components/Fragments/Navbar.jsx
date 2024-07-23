import React, { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Button } from "../Elements/Button";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const user = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const data = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = data.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);

    setTotalCart(sum)
  });

  return (
    <div className="flex justify-end bg-blue-400 h-20 px-5 items-center">
      <p className="text-white text-xl me-3">{user}</p>
      <Button
        onClick={handleLogout}
        text="log out"
        className="w-fit h-fit"
      ></Button>
      <button className="btn ms-2">
        Cart
        <div className="badge badge-secondary">{totalCart}</div>
      </button>
    </div>
  );
};
