import * as React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useContextCustom } from "../context/StateContext";
import { Link } from "react-router-dom";

type productType = {
  product: {
    title: string;
    image: string;
    description: string;
    price: number;
    id: number;
  };
};

const Product = ({ product }: productType) => {
  const { dispatch } = useContextCustom();
  const { title, image, description, price, id } = product;

  return (
    <div className=" w-72 flex flex-col shadow p-7 gap-5 max-h-full h-full">
      <img className=" max-w-[150px] h-[200px] mx-auto" src={image} alt="" />
      <div className=" flex flex-col gap-4 h-64">
        <h2 className=" text-base font-medium">{title.substring(0, 25)}</h2>
        <h4>${price}</h4>
        <p className=" text-sm">{description.substring(0, 150)}</p>
        <div className=" flex gap-4 mt-auto">
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            className=" px-4 py-1 bg-gray-700 text-white "
          >
            Add to cart
          </button>
          <Link to={`detail/${id}`}>
            <button className=" px-4 py-1 bg-black text-white">Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
