import React from "react";
import { Button } from "../Elements/Button";


export const CardProduct = (props) => {
  const { children } = props
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-10 me-5">
      {children}
    </div>
  );
};


const Image = (props) => {
  const { urlImage } = props
  return (
    <figure>
      <img
        src={urlImage}
        alt="Shoes"
        className="object-cover h-48 w-96 hover:h-full"
      />
    </figure>
  )
}

const Body = (props) => {
  const { children } = props;
  return <div className="card-body">{children}</div>;
};

const Title = (props) => {
  const { title } = props;
  return <h2 className="card-title">{title}</h2>;
};

const Description = (props) => {
  const { desc } = props;
  return <p>{desc}</p>;
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="card-actions mt-5">
      <div className="grid grid-cols-12 gap-1 w-full ">
        <div className="col-span-7 self-center">
          <p>{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
        </div>
        <div className="col-span-5 justify-self-stretch">
          <Button text="Buy Now" onClick={() => handleAddToCart(id)}/>
        </div>
      </div>
    </div>
  );
};

CardProduct.image = Image
CardProduct.body = Body
CardProduct.title = Title
CardProduct.desc = Description
CardProduct.footer = Footer

