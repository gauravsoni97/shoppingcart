import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import ProductDetailsPage from "./components/Products/ProductDetailsPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
