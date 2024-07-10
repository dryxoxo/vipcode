import React from "react";
import { Button } from "../components/Elements/Button";
import { CardProduct } from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/image/pair-trainers-2.jpg",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "Sepatu Olahraga",
    price: "Rp 1.200.000",
    image: "/image/pair-trainers.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    title: "Sepatu Lari",
    price: "Rp 950.000",
    image: "/image/pair-trainers-1.png",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    title: "Sepatu Casual",
    price: "Rp 800.000",
    image: "/image/pair-trainers-2.jpg",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    title: "Sepatu Formal",
    price: "Rp 1.500.000",
    image: "/image/pair-trainers.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const email = localStorage.getItem("email");
const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};
export const ProductsPage = () => {
  const producList = products.map((product) => (
    <CardProduct key={product.id}>
      <CardProduct.image urlImage={product.image} />
      <CardProduct.body>
        <CardProduct.title title={product.title} />
        <CardProduct.desc desc={product.desc} />
        <CardProduct.footer price={product.price} />
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
          className="w-fit h-fit"
        ></Button>
      </div>
      <div className="flex justify-center flex-wrap">{producList}</div>
    </>
  );
};
