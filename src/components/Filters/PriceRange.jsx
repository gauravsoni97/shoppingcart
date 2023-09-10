import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const PriceRange = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <li className="mb-4 border-2 border-gray-700 border-dashed rounded-lg p-4">

    <Box>
      <p className="text-sm font-medium text-gray-900 dark:text-gray-300 mb-3">
        Price Range
      </p>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300 mt-2">
          Min: 322
        </h3>
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300 mt-2">
          Max: 322
        </h3>
      </div>
    </Box>
    </li>
  );
};

export default PriceRange;
