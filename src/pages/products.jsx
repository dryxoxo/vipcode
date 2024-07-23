import React, { useEffect, useRef, useState } from "react";
import { CardProduct } from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import { TableCarts } from "../components/Fragments/TableCarts";
import { Navbar } from "../components/Fragments/Navbar";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);



  const producList =
    products.length > 0 &&
    products.map((product) => (
      <CardProduct key={product.id}>
        <CardProduct.image urlImage={product.image} />
        <CardProduct.body>
          <CardProduct.title title={product.title} id={product.id} />
          <CardProduct.desc desc={product.desc} />
          <CardProduct.footer price={product.price} id={product.id} />
        </CardProduct.body>
      </CardProduct>
    ));
  return (
    <>
    <Navbar/>
      <div className="flex justify-center flex-wrap">
        <div className="w-3/4 flex flex-wrap justify-end">{producList}</div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 mt-5 ms-5">Cart</h1>
          <TableCarts products={products} />
        </div>
      </div>
    </>
  );
};
