import React from "react";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import AllProducts from "./components/Products/AllProducts";

const App = () => {
  return (
    <div>
      <>
        <Header />
        <Filters />
        <AllProducts />
      </>
    </div>
  );
};

export default App;
