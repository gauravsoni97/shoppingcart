import React from "react";
import HighLowPrice from "./HighLowPrice";
import InStockPrice from "./InStockPrice";
import PriceRange from "./PriceRange";
import Ratings from "./Rating/Ratings";
import ClearAllFilters from "./ClearAllFilters";
import CategoryFilter from "./CategoryFilter";

const Filters = () => {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <h4 className="text-xl font-bold dark:text-white mb-3 mt-1">Filters</h4>

          <ul className="font-medium">
            <HighLowPrice />
            <InStockPrice />
            <PriceRange />
            <Ratings />

            <li>
              <ClearAllFilters />
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Filters;
