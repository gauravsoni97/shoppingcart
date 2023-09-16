import React from "react";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import AllProducts from "../Products/AllProducts";

const Home = () => {
  return (
    <>
      <Filters />
      <AllProducts />
    </>
  );
};

export default Home;
