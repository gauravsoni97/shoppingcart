import React, { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useProductsContext } from "../../context/ProductsContext";

const SearchBar = () => {
  const { setFilteredProducts, products } = useProductsContext();

  const [searchItem, setSearchItem] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [suggestionSelected, setSuggestionSelected] = useState(false); // Track suggestion selection

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const updatedList = products.filter((product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase())
      );
      setLoadingSuggestions(false);
      setFilteredProducts(updatedList);
      setSuggestions(updatedList.map((product) => product.title));
    }, 500);

    setLoadingSuggestions(true);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchItem, products, setFilteredProducts]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  // Function to handle suggestion selection
  const handleSuggestionClick = (selectedSuggestion) => {
    setSearchItem(selectedSuggestion);
    setSuggestionSelected(true);
  };

  return (
    <div className="w-[40vw]">
      <form onSubmit={handleSearchSubmit}>
        <div className="relative">
          <button
            type="submit"
            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <SearchRoundedIcon />
          </button>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search product here..."
            required
            value={searchItem}
            autoComplete="off"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      </form>

      {searchItem.length > 0 &&
        !suggestionSelected &&
        suggestions.length > 0 && (
          <ul className="absolute  bg-gray-800 w-[30vw] h-36 overflow-auto rounded-lg p-6 ">
            {loadingSuggestions ? (
              <li>Loading...</li>
            ) : (
              suggestions.map((suggest, index) => (
                <li
                  className="mb-4 cursor-pointer"
                  key={index}
                  onClick={() => handleSuggestionClick(suggest)}
                >
                  {suggest}
                </li>
              ))
            )}
          </ul>
        )}
    </div>
  );
};

export default SearchBar;
