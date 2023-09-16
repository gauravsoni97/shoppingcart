import React, { createContext } from "react";

export const CartCtx = createContext();

const CartContext = ({ children }) => {

    
  const ctxValues = {};

  return <CartCtx.Provider value={ctxValues}>{children}</CartCtx.Provider>;
};

export default CartContext;
