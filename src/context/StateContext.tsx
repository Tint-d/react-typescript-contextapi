import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";
import { addType, stateType, updateType } from "../modules";

type childrenType = {
  children: React.ReactNode;
};

type actionType = updateType | addType;

const initialState = {
  productList: [],
  cart: [],
};

const StateContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<actionType>;
}>({ state: initialState, dispatch: () => {} });

export const StateContextProvider = ({ children }: childrenType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://fakestoreapi.com/products`);
      const data = await api.json();
      dispatch({ type: "GET_PRODUCT", payload: data });
    };
    fetchData();
  }, []);

  const data = { state, dispatch,isLoading,setIsLoading };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
