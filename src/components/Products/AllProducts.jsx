import React from "react";
import SingleProduct from "./SingleProduct";
import { useProductsContext } from "../../context/ProductsContext";

const AllProducts = () => {
  const { products, loading, error } = useProductsContext();

  console.log("productList", products);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 flex items-start justify-start gap-3 flex-wrap">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
