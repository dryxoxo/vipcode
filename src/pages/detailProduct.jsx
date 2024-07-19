import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

export const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
    console.log(product);
  }, [id]);

  return (
    <div>
      <p>{product.title}</p>
    </div>
  );
};
