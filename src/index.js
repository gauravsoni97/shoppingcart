import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductsProvider from "./context/ProductsContext";
import CartContext from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductsProvider>
      <CartContext>
        <App />
      </CartContext>
    </ProductsProvider>
  </BrowserRouter>
);
