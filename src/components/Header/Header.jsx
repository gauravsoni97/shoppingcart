import React, { useState } from "react";

const Header = () => {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between">
        <div>logo</div>
        <div>searchbar</div>
        <div>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Cart
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
