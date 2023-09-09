import React from "react";

const SingleProduct = ({ key, product }) => {
  const { images, title, description, rating, price } = product;
  return (
    <div key={key}>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img class="p-8 rounded-lg h-72 w-96 object-cover" src={images[0]} alt="product image" />
        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p class="text-sm tracking-tight text-gray-900 dark:text-white line-clamp-[1]">
              {description}
            </p>
          <div class="flex items-center mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
              Rating: {(rating).toFixed(1)}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>

            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to Cart</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
