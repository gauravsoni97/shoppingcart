import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { addtoCartList } = useCartContext();

  const [cartItems, setCartItems] = useState(addtoCartList);

  console.log("cartItems", cartItems);

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  return (
    <div className="w-full flex items-start justify-center h-[80vh] mt-28">
      <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Cart Items
          </h5>

          {cartItems.length > 0 && (
            <button
              onClick={() => setCartItems([])}
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Delete all
            </button>
          )}
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {cartItems?.map((item) => {
              const { id, title, description, price, image } = item;
              return (
                <li className="py-3 sm:py-4">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center gap-6">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={image}
                        alt="Neil image"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {title}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                      <CloseRoundedIcon style={{ fontSize: "1rem" }} />1 
                      <button
                        onClick={() => increaseQuantity(id)}
                        className="font-bold flex items-center justify-center bg-gray-700 w-8 h-6 rounded-md"
                      >
                        <AddRoundedIcon style={{ fontSize: "1rem" }} />
                      </button>
                      <button
                        onClick={() => decreaseQuantity(id)}
                        className="font-bold flex items-center justify-center bg-gray-700 w-8 h-6 rounded-md"
                      >
                        <RemoveRoundedIcon style={{ fontSize: "1rem" }} />
                      </button>
                    </div>
                    <div className="items-center text-base font-semibold text-gray-900 dark:text-white">
                      ${price}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
