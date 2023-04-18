import { addType, stateType, updateType } from "../modules";

type actionType = updateType | addType;

export const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, productList: action.payload };
    case "ADD_TO_CART":
      const newCart = action.payload;
      const isExistedInCart = state.cart.find(
        (cartItem) => cartItem.id === newCart.id
      );
      if (isExistedInCart) {
        return {
          ...state,
          cart: state.cart.map((insideCart) =>
            insideCart.id === newCart.id ? { ...newCart } : { ...insideCart }
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...newCart }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CART_EMPTY":
      return { ...state, cart: (state.cart = []) };
    default:
      return state;
  }
};
