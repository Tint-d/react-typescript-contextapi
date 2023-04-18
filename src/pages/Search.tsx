import React from "react";
import { useLocation } from "react-router-dom";
import Product from "../components/Product";
import { useContextCustom } from "../context/StateContext";

type productType = {
  title: string;
  image: string;
  description: string;
  price: number;
  id: number;

};

const Search = () => {
  const location = useLocation();
  const items = location?.state?.filterProduct;
  const {dispatch} = useContextCustom()
  return (
    <div>
      <div>
      {items?.map((item:productType) => {
          return (
            <div className=" w-72 flex flex-col shadow p-7 gap-5 max-h-full h-full">
            <img className=" max-w-[150px] h-[200px] mx-auto" src={item?.image} alt="" />
            <div className=" flex flex-col gap-4 h-64">
              <h2 className=" text-base font-medium">{item?.title.substring(0, 25)}</h2>
              <h4>${item?.price}</h4>
              <p className=" text-sm">{item?.description.substring(0, 150)}</p>
              <button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
                className=" px-6 py-1 w-40 bg-gray-700 text-white mt-auto"
              >
                Add to cart
              </button>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
