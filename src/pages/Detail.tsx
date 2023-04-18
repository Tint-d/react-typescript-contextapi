import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextCustom } from "../context/StateContext";

type productType = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<{
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  }>({
    id: 1,
    title: "",
    image: "",
    description: "",
    price: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await api.json();
      setProduct(data);
    };
    fetchData();
  }, []);

  const { dispatch } = useContextCustom();
  return (
    <div className=" flex justify-center mt-20">
      <div className=" w-72 flex flex-col shadow p-7 gap-5 max-h-full h-full">
        <img
          className=" max-w-[150px] h-[200px] mx-auto"
          src={product?.image}
          alt=""
        />
        <div className=" flex flex-col gap-4 h-64">
          <h2 className=" text-base font-medium">
            {product.title.substring(0, 25)}
          </h2>
          <h4>${product?.price}</h4>
          <p className=" text-sm">{product?.description.substring(0, 150)}</p>
          <div className=" flex gap-4 mt-auto">
            <button
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
              className=" px-4 py-1 bg-gray-700 text-white "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
