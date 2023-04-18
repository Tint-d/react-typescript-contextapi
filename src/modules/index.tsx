export type stateType = {
  productList: any[];
  cart: any[];
};
export type updateType = {
  type: "GET_PRODUCT";
  payload: any[];
};

export type addType = {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CART_EMPTY";
  payload: {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  };
};
