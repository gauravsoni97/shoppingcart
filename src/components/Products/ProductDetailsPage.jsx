import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../context/ProductsContext";

const ProductDetailsPage = () => {
  const { id: SelectedProductId } = useParams();

  const { filteredProducts } = useProductsContext();

  const [selectedProductItem, setSelectedProductItem] = useState(null);

  useEffect(() => {
    const selectedProduct = filteredProducts.find((ele) => ele.id === parseInt(SelectedProductId));

    setSelectedProductItem(selectedProduct);

  }, [SelectedProductId, filteredProducts]);

  console.log("selectedProductItem", selectedProductItem);
  console.log("SelectedProductId", selectedProductItem);

  return (
    <div>
      {selectedProductItem ? (
        <div style={{position:"absolute", top:"10rem", left:"10rem"}}>
          <h2>Product Details</h2>
          <p>Name: {selectedProductItem.title}</p>
          <p>Description: {selectedProductItem.description}</p>
        </div>
      ) : (
        <div>Loading...</div> 
      )}
    </div>
  );
};

export default ProductDetailsPage;
