import React, { useEffect, useRef, useState } from "react";
import { Button } from "../components/Elements/Button";
import { CardProduct } from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { jwtDecode } from "jwt-decode";


export const ProductsPage = () => {
  const [cart, setcart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [user, setuser] = useState("")
  
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      const { user } = jwtDecode(token);
      setuser(user)
    } else {
      window.location.href = "/login"
    }
  })
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    setcart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setcart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setcart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    cart.length > 0
      ? (totalPriceRef.current.style.display = "table-row")
      : (totalPriceRef.current.style.display = "none");
  }, [cart]);

  const producList =
    products.length > 0 &&
    products.map((product) => (
      <CardProduct key={product.id}>
        <CardProduct.image urlImage={product.image} />
        <CardProduct.body>
          <CardProduct.title title={product.title} />
          <CardProduct.desc desc={product.desc} />
          <CardProduct.footer
            price={product.price}
            handleAddToCart={handleAddToCart}
            id={product.id}
          />
        </CardProduct.body>
      </CardProduct>
    ));
  return (
    <>
      <div className="flex justify-end bg-blue-400 h-20 px-5 items-center">
        <p className="text-white text-xl me-3">{user}</p>
        <Button
          onClick={handleLogout}
          text="log out"
          className="w-auto h-auto"
        ></Button>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="w-3/4 flex flex-wrap justify-end">{producList}</div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 mt-5 ms-5">Cart</h1>
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{item.qty}</td>
                      <td>{item.qty * product.price}</td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
