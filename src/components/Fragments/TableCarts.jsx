import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const TableCarts = (props) => {
  const { products } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(sum);
    }
  }, [cart, products]);

  return (
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
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{item.qty}</td>
                <td>{item.qty * product.price}</td>
              </tr>
            );
          })}
        <tr>
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
  );
};
