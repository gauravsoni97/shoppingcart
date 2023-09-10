import React from "react";

const InStockPrice = () => {
  return (
    <li className="mb-4 border-2 border-gray-700 border-dashed rounded-lg py-3 px-4">
      <div className="flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="checked-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          In Stock
        </label>
      </div>
    </li>
  );
};

export default InStockPrice;
