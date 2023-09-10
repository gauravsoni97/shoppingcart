import React, { useEffect, useState } from "react";
import StarRatingUi from "./StarRatingUi";
import { useProductsContext } from "../../../context/ProductsContext";

const Ratings = () => {
  const { setFilteredProducts, products } = useProductsContext();

  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    if (selectedRating !== null) {
      const updatedList = products.filter((ele) => {
        return Math.floor(ele.rating) === selectedRating;
      });
      setFilteredProducts([...updatedList]);
    } else {
      // Handle the case when no rating is selected (e.g., show all products)
      setFilteredProducts([...products]);
    }
  }, [selectedRating, products, setFilteredProducts]);

  const ratingValues = [4, 3, 2, 1];

  return (
    <li className="mb-4 border-2 border-gray-700 border-dashed rounded-lg py-3 px-4">
      <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mb-3">
        Ratings
      </p>

      {ratingValues.map((value) => (
        <StarRatingUi
          key={value}
          StarRatingValue={value}
          setSelectedRating={setSelectedRating}
        />
      ))}
    </li>
  );
};

export default Ratings;
