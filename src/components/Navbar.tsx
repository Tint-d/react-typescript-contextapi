import { Badge, Input } from "@mantine/core";
import { useState } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { useContextCustom } from "../context/StateContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  const {
    state: { cart },
  } = useContextCustom();
  const {
    state: { productList },
  } = useContextCustom();

  const filterProduct = productList.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nav("/search", { state: { filterProduct } });
  };

  return (
    <div className=" flex justify-around p-7 shadow-lg rounded">
      <Link to={"/"}>
        <h2 className=" text-2xl font-medium text-violet-600">NovaX</h2>
      </Link>
      <div className="flex gap-5">
        <form onSubmit={searchHandler}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="filled"
            placeholder="Search"
          />
        </form>
        <div className=" relative">
          <Badge className=" absolute bottom-6 left-5">{cart.length}</Badge>
          <Link to={'/addtocart'}>
            <BsFillHandbagFill className=" text-3xl text-violet-900" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
