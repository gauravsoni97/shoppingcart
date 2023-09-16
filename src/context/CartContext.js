import React, { createContext, useState } from "react";

export const CartCtx = createContext();

const CartContext = ({ children }) => {
const [addtoCartList, setaddtoCartList] = useState([])

  const ctxValues = {addtoCartList, setaddtoCartList};

  return <CartCtx.Provider value={ctxValues}>{children}</CartCtx.Provider>;
};

export default CartContext;
