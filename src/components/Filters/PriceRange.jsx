import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useProductsContext } from "../../context/ProductsContext";

function valuetext(value) {
  return `${value}`;
}

const PriceRange = () => {
  const {  clearAllFilters, setClearAllFilters, setFilteredProducts, products } = useProductsContext();

  const [value, setValue] = useState([20, 800]);
  console.log("price range value", value[0], value[1]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setClearAllFilters(false)
  };


  const showAllPriceProduct =()=>{
    setClearAllFilters(true);
  }

  useEffect(() => {
    const updatedList = products.filter((product) => {
      const price = product.price; // Assuming each product has a "price" property
      return price >= value[0] && price <= value[1];
    });
    setFilteredProducts(updatedList);
  }, [value, products]);

  useEffect(() => {
    if (clearAllFilters) {
      setValue([0, 1000])
    }
  }, [clearAllFilters]);
  

  return (
    <li className="mb-4 border-2 border-gray-700 border-dashed rounded-lg py-3 px-4">
      <Box>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mb-3">
          Price Range
        </p>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          step={10}
          marks
          min={10}
          max={1000}
        />
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300 mt-2">
            Min: {value[0]}
          </h3>
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300 mt-2">
            Max: {value[1]}
          </h3>
        </div>

        <button onClick={showAllPriceProduct} type="button" class=" w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-2">Show All</button>


        
      </Box>
    </li>
  );
};

export default PriceRange;
