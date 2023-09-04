import React, { useState } from "react";

const Header = () => {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between">
       <div>logo</div>
       <div>searchbar</div>
       <div>cart btn</div>
      </nav>
    </div>
  );
};

export default Header;
