import React from "react";
import StarRatingUi from "./StarRatingUi";

const Ratings = () => {
  return (
    <li className="mb-4 border-2 border-gray-700 border-dashed rounded-lg p-4">
      <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mb-3">
        Ratings
      </p>

      <StarRatingUi StarRatingValue={5} />
      <StarRatingUi StarRatingValue={4} />
      <StarRatingUi StarRatingValue={3} />
      <StarRatingUi StarRatingValue={2} />
      <StarRatingUi StarRatingValue={1} />
    </li>
  );
};

export default Ratings;
