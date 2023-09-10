import React, { useState } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const StarRatingUi = ({ StarRatingValue, setSelectedRating }) => {
  const [checkedStar, setCheckedStar] = useState(false);

  const handleCheckedValue = () => {
    const newCheckedState = !checkedStar;
    setCheckedStar(newCheckedState);

    if (newCheckedState) {
      setSelectedRating(StarRatingValue);
    } else {
      setSelectedRating(null); // Clear the rating if unchecked
    }

    console.log("checkedStar", checkedStar);
  };

  return (
    <div className="flex items-center mb-2">
      <input
        checked={checkedStar}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleCheckedValue}
      />
      <label
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center"
      >
        {StarRatingValue}
        <StarRoundedIcon
          style={{ color: "yellow", fontSize: "1rem", margin: "0 .2rem" }}
        />
        & above
      </label>
    </div>
  );
};

export default StarRatingUi;
