import { Badge } from "@mantine/core";
import React, { useState } from "react";
import { useContextCustom } from "../context/StateContext";

type cartType = {
  item: {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  };
  decresePrice: (price: number) => void;
  incresePrice: (price: number) => void;
  action?:string
};


const Cart = ({ item, incresePrice, decresePrice }: cartType) => {
  const { id, title, image, description, price } = item;
  const [qty, setQty] = useState(1);
  const { dispatch } = useContextCustom();

  const oneItemPrice = item.price * qty;

  const increse = () => {
    setQty((prev) => prev + 1);
    incresePrice(item.price);
  };

  const decrese = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      decresePrice(item.price);
    }
  };

  const delBtn = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    decresePrice(oneItemPrice);
  };
  return (
    <div className=" w-[400px] shadow bg-gray-50 relative rounded flex justify-between p-7">
      <Badge
        onClick={delBtn}
        color="red"
        className=" absolute top-[-17px] right-[-10px] cursor-pointer"
      >
        x
      </Badge>
      <div className=" flex  gap-5 items-center">
        <img className=" max-w-[80px]" src={image} alt="" />
        <div className=" flex flex-col gap-3">
          <p className=" text-base">{title.substring(0, 20)}</p>
          <p>${oneItemPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className=" flex flex-col gap-2 items-center">
        <p onClick={increse} className=" cursor-pointer select-none">
          +
        </p>
        <p className=" select-none">{qty}</p>
        <p onClick={decrese} className=" cursor-pointer select-none">
          -
        </p>
      </div>
    </div>
  );
};

export default Cart;
