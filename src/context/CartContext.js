import React, { createContext, useContext, useState } from "react";
import { useProductsContext } from "./ProductsContext";

export const CartCtx = createContext();

const CartContext = ({ children }) => {
  const [addtoCartList, setaddtoCartList] = useState([]);

  const { products } = useProductsContext();

  const addToCartItem = (id) => {
    const AddThisItem = products.filter((ele) => {
      return ele.id === id;
    });

    setaddtoCartList([...addtoCartList, AddThisItem]);
  };

  console.log("addtoCartList", addtoCartList);

  const ctxValues = { addToCartItem };

  return <CartCtx.Provider value={ctxValues}>{children}</CartCtx.Provider>;
};

export default CartContext;

// Custom hook to access the context value
export const useCartContext = () => {
  return useContext(CartCtx);
};
