import React from "react";
import SingleProduct from "./SingleProduct";
import { useProductsContext } from "../../context/ProductsContext";
import SkeletonProductCard from "./SkeletonProductCard";
import NoResults from "./NoResults";
import Pagination from "./Pagination";

const AllProducts = () => {
  const { filteredProducts, loading, error, page } = useProductsContext();

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-20 flex items-start justify-start gap-3 flex-wrap">
        {filteredProducts.length === 0 && !loading && <NoResults />}

        {loading && <SkeletonProductCard />}

        {(filteredProducts || [])
          .slice(page * 10 - 10, page * 10)
          .map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
      </div>
      
      {filteredProducts.length > 8 && (
        <Pagination filteredProducts={filteredProducts} />
      )}
    </div>
  );
};

export default AllProducts;
