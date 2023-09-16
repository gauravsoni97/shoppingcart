import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between">
        <Link to="/">
          <div className="text-xl font-bold">Shopping Cart</div>
        </Link>
        <div>
          <SearchBar />
        </div>
        <div>
          <Link to="/cart">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              My Cart (9)
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
