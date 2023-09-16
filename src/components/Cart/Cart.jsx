import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Item 1",
      desc: "Description for Item 1",
      price: 123,
      count: 1,
    },
    {
      id: 2,
      title: "Item 2",
      desc: "Description for Item 2",
      price: 456,
      count: 1,
    },
    {
      id: 3,
      title: "Item 3",
      desc: "Description for Item 3",
      price: 789,
      count: 1,
    },
   
  
  ]);

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
            {cartItems.length === 0 && <p> Cart is empty ... </p>}
            {cartItems?.map((item) => {
              const { id, title, desc, price, count } = item;
              return (
                <li className="py-3 sm:py-4" key={id}>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center gap-6">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt="Neil image"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {title}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {desc}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-center">
                      <CloseRoundedIcon style={{ fontSize: "1rem" }} /> {count}
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
