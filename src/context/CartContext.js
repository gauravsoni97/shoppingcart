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

  const removeCartItem = (id) => {
    // Use filter to remove the item with the matching id
    const updatedCartList = addtoCartList.filter((item) => item[0].id !== id);
    setaddtoCartList(updatedCartList);
  };
  
  
  console.log("addtoCartList", addtoCartList);

  const ctxValues = { addtoCartList, addToCartItem, removeCartItem };

  return <CartCtx.Provider value={ctxValues}>{children}</CartCtx.Provider>;
};

export default CartContext;

// Custom hook to access the context value
export const useCartContext = () => {
  return useContext(CartCtx);
};
