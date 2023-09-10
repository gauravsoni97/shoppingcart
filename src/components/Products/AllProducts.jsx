import React from "react";
import SingleProduct from "./SingleProduct";
import { useProductsContext } from "../../context/ProductsContext";
import SkeletonProductCard from "./SkeletonProductCard";

const AllProducts = () => {
  const { filteredProducts, loading, error } = useProductsContext();

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 flex items-start justify-start gap-3 flex-wrap">
        {filteredProducts.length === 0 && !loading && <p>no data found</p>}
        {loading && <SkeletonProductCard />}
        {(filteredProducts || []).map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
