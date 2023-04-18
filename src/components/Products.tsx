import React from "react";
import { useContextCustom } from "../context/StateContext";
import Product from "./Product";

const Products = () => {
  const {
    state: { productList },
  } = useContextCustom();

  return (
    <div className=" flex flex-wrap gap-10 justify-center mt-20">
      {productList?.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
