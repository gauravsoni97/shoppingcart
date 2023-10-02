import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../context/ProductsContext";

// Define a separate Icon component to reduce duplication
const Icon = () => (
  <svg
    fill="currentColor"
    stroke="currentColor"
    stroke-linecap="round"
    strokeLineJoin="round"
    strokeWidth="2"
    className="w-4 h-4 text-blue-400"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

const ProductDetailsPage = () => {
  const { id: SelectedProductId } = useParams();
  const { filteredProducts } = useProductsContext();
  const [selectedProductItem, setSelectedProductItem] = useState(null);

  useEffect(() => {
    const selectedProduct = filteredProducts.find(
      (ele) => ele.id === parseInt(SelectedProductId)
    );
    setSelectedProductItem(selectedProduct);
  }, [SelectedProductId, filteredProducts]);

  return (
    <div className="text-gray-400 absolute top-16 body-font">
      {selectedProductItem && (
        <section className="text-gray-400 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
                <div className="grid gap-4">
                  <div
                    className="h-80 max-w-full rounded-lg bg-cover bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${selectedProductItem.images[0]})`,
                    }}
                  ></div>
                  <div className="grid grid-cols-5 gap-4">
                    {selectedProductItem.images.slice(1, 5).map((image, index) => (
                      <div key={index}>
                        <img
                          className="h-20 max-w-full rounded-lg"
                          src={image}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {selectedProductItem.brand}
                </h2>
                <h1 className="text-white text-3xl title-font font-medium mb-1">
                  {selectedProductItem.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Icon key={index} />
                    ))}
                    <span className="ml-3">
                      {selectedProductItem.rating.toFixed(1)} Rating
                    </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                    {/* Your social media icons */}
                  </span>
                </div>
                <p className="leading-relaxed">
                  {selectedProductItem.description}
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-white">
                    ${selectedProductItem.price}
                  </span>
                  <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                    Buy Now
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      strokeLineJoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      {/* Your SVG path for the second button */}
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailsPage;
