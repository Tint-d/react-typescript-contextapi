import React, { useEffect, useState } from "react";
import { useContextCustom } from "../context/StateContext";
import Cart from "./Cart";
import { Link, useNavigate } from "react-router-dom";

const Addtocart = () => {
  const {
    state: { cart },
  } = useContextCustom();

  const [mainTotal, setMainTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setMainTotal(total);
  }, []);

  const total = () => cart.reduce((total, item) => total + item.price, 0);

  const incresePrice = (price: number) => {
    setMainTotal(mainTotal + price);
  };

  const decresePrice = (price: number) => {
    setMainTotal(mainTotal - price);
  };

  if (cart.length === 0) {
    return (
      <div className=" flex flex-col justify-center h-screen ">
        <h2 className="text-3xl text-gray-500 font-semibold text-center">
          Your Cart is empty
        </h2>
        <div className=" flex justify-center">
          <Link to={"/"}>
            <button className=" mt-3 w-24 mx-auto bg-gray-800 text-white px-4 py-1">
              Fill it
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className=" flex flex-wrap justify-center mt-20 gap-5 md:flex-col items-center">
        {cart.map((item) => {
          return (
            <Cart
              key={item.id}
              item={item}
              incresePrice={incresePrice}
              decresePrice={decresePrice}
            />
          );
        })}
      </div>
      <hr className=" border-b-gray-400 w-[55%] mx-auto border-b-2 mt-4" />
      <div className="mt-4 flex justify-around items-center">
        <h3 className="text-2xl text-gray-500 font-medium">Total</h3>
        <p className=" text-xl text-gray-500 font-medium">${mainTotal.toFixed(2)}</p>
      </div>
    </>
  );
};

export default Addtocart;
