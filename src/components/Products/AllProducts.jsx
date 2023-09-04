import React from "react";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 flex items-start justify-start gap-3 flex-wrap">
          <SingleProduct />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
