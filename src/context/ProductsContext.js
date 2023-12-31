import React, { createContext, useContext, useEffect, useState } from "react";

// Create a new context
export const ProductsListCtx = createContext();

// Custom context provider component
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [clearAllFilters, setClearAllFilters] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);

  const selectedPageHandler = (val) => {
    if (val >= 1 && val != page && val <= filteredProducts.length / 10) {
      setPage(val);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setClearAllFilters(clearAllFilters);
    console.log("clearAllFilters", clearAllFilters);
  }, [clearAllFilters]);

  const ctxValue = {
    filteredProducts,
    setFilteredProducts,
    products,
    loading,
    error,
    clearAllFilters,
    setClearAllFilters,
    page,
    setPage,
    selectedPageHandler,
  };

  // Return the context provider with the value prop
  return (
    <ProductsListCtx.Provider value={ctxValue}>
      {children}
    </ProductsListCtx.Provider>
  );
};

export default ProductsProvider;

// Custom hook to access the context value
export const useProductsContext = () => {
  return useContext(ProductsListCtx);
};
