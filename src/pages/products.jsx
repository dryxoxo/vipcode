import React, { useState } from "react";
import { Button } from "../components/Elements/Button";
import { CardProduct } from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: "1000000",
    image: "/image/pair-trainers-2.jpg",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "Sepatu Olahraga",
    price: "1200000",
    image: "/image/pair-trainers.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    title: "Sepatu Lari",
    price: "950000",
    image: "/image/pair-trainers-1.png",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    title: "Sepatu Casual",
    price: "800000",
    image: "/image/pair-trainers-2.jpg",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    title: "Sepatu Formal",
    price: "1500000",
    image: "/image/pair-trainers.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const email = localStorage.getItem("email");

export const ProductsPage = () => {

  const [cart, setcart] = useState([{
    id: 1,
    qty: 1
  }])

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find(item => item.id === id)) {
      setcart(
        cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
      )
    } else {
      setcart([
        ...cart,
        {
          id,
          qty: 1
        }
      ])
    }
  }

  const producList = products.map((product) => (
    <CardProduct key={product.id}>
      <CardProduct.image urlImage={product.image} />
      <CardProduct.body>
        <CardProduct.title title={product.title} />
        <CardProduct.desc desc={product.desc} />
        <CardProduct.footer price={product.price} handleAddToCart={handleAddToCart} id={product.id} />
      </CardProduct.body>
    </CardProduct>
  ));

  return (
    <>
      <div className="flex justify-end bg-blue-400 h-20 px-5 items-center">
        <p className="text-white text-xl me-3">{email}</p>
        <Button
          onClick={handleLogout}
          text="log out"
          className="w-auto h-auto"
        ></Button>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="w-3/4 flex flex-wrap justify-end">
          {producList}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 mt-5">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                )
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty * product.price}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
