import React from "react";
import { useProductsContext } from "../../context/ProductsContext";

const ClearAllFilters = () => {
  const {setClearAllFilters} = useProductsContext();
  return (
    <button
      type="button"
      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-full"
      onClick={() => setClearAllFilters(true)}
    >
      Clear All
    </button>
  );
};

export default ClearAllFilters;
