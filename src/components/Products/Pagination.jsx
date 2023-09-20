import React from "react";
import { useProductsContext } from "../../context/ProductsContext";

const Pagination = ({ filteredProducts }) => {
  const { page, selectedPageHandler } = useProductsContext();

  return (
    <div className="mx-auto my-4">
      <nav aria-label="Page navigation example">
        <ul class="flex -space-x-px text-sm justify-center">
          <li>
            <a
              onClick={() => selectedPageHandler(page - 1)}
              href="#"
              class={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ${page > 1 ? "" : "opacity-20 disable"}`}
            >
              Previous
            </a>
          </li>

          <li className="flex items-center">
            {[...Array(filteredProducts.length / 10)].map((ele, ind) => {
              return (
                <a
                  key={ind}
                  href="#"
                  class={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    page === ind + 1
                      ? "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br "
                      : " "
                  }`}
                  onClick={() => selectedPageHandler(ind + 1)}
                >
                  {ind + 1}
                </a>
              );
            })}
          </li>

          <li>
            <a
              onClick={() => selectedPageHandler(page + 1)}
              href="#"
              class={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page < filteredProducts.length /10 ? "" : "opacity-20"}`}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
