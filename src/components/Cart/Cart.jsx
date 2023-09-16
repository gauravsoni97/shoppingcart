import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Cart = () => {
  return (
    <div className="w-full flex items-center justify-center h-[100vh]">
      <div class="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Cart Items
          </h5>
          <a
            href="#"
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Delete all
          </a>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center justify-between space-x-4">
                <div class="flex items-center gap-6">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  />
                  <div>
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                </div>
                <div class=" flex items-center gap-3 justify-center">
                  <button className="font-bold   flex items-center justify-center bg-gray-700 w-8 h-6 rounded-md">
                    <AddRoundedIcon style={{ fontSize: "1rem" }} />
                  </button>
                  <CloseRoundedIcon style={{ fontSize: "1rem" }} /> 1
                  <button className="font-bold   flex items-center justify-center bg-gray-700 w-8 h-6 rounded-md">
                    <RemoveRoundedIcon style={{ fontSize: "1rem" }} />
                  </button>
                </div>
                <div class="items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
