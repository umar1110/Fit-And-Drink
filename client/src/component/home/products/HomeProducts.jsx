import React from "react";
import useProducts from "../../../context/productsContext";
import {Link} from "react-router-dom"
function HomeProducts() {
  const { products } = useProducts();

 
  return (
    <>
      <div className="bg-transparent">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl  md:text-3xl font-bold tracking-tight text-center text-gray-900">
            Featured Products
          </h2>

          {/* Products Box  */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map(
              (product) =>
                // Products
                product.featured && (
                  <Link
                    to={`/product/${product._id}`}
                    key={product._id}
                    className="group relative border-2 border-[#dadada]  rounded-lg overflow-hidden pb-4 min-h-fit"
                  >
                    {/* Section 1 image */}
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        alt={product.title}
                        src={product.images[0].url}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    {/* Section 2 name and btn */}
                    <div className="mt-4 text-center space-y-3 pb-3 px-2">
                      <h1 className="product-name text-ellipsis text-center text-lg">
                        {product.title}
                      </h1>
                      <button className="inquiry-button bg-[#BEC2C8] hover:bg-[#1A355B] hover:text-white py-2 px-4 rounded-full ">
                        Inquire Now
                      </button>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProducts;
