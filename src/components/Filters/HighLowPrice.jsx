import React, { useEffect, useState } from "react";
import { useProductsContext } from "../../context/ProductsContext";

const HighLowPrice = () => {
  const { clearAllFilters, setClearAllFilters, setFilteredProducts, products } =
    useProductsContext();

  const [checkedLowToHigh, setCheckedLowToHigh] = useState(false);
  const [checkedHighToLow, setCheckedHighToLow] = useState(false);

  const handleLowToHigh = () => {
    setClearAllFilters(false);
    setCheckedLowToHigh(true);
    setCheckedHighToLow(false);

    const lowToHighSort = [...products].sort((a, b) => a.price - b.price);
    setFilteredProducts(lowToHighSort);
  };

  const handleHighToLow = () => {
    setClearAllFilters(false);
    setCheckedLowToHigh(false);
    setCheckedHighToLow(true);

    const highToLowSort = [...products].sort((a, b) => b.price - a.price);
    setFilteredProducts(highToLowSort);
  };

  useEffect(() => {
    if (clearAllFilters) {
      setCheckedLowToHigh(false);
      setCheckedHighToLow(false);
      setFilteredProducts(products);
    }
  }, [clearAllFilters]);

  return (
    <li className="mb-4 border-2 border-gray-700 border-dashed rounded-lg py-3 px-4">
      <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mb-3">
        Sort By
      </p>
      <div className="flex items-center mb-4">
        <input
          checked={checkedLowToHigh}
          id="default-radio-1"
          type="radio"
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={handleLowToHigh}
        />
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Low to High
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked={checkedHighToLow}
          id="default-radio-2"
          type="radio"
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={handleHighToLow}
        />
        <label
          htmlFor="default-radio-2"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          High to Low
        </label>
      </div>
    </li>
  );
};

export default HighLowPrice;
