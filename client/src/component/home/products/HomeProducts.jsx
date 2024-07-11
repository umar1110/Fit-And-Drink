import { useGSAP } from "@gsap/react";
import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../context/productsContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function HomeProducts() {
  const { products, loading } = useProducts();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (window.innerWidth < 768) {
      const cards = document.querySelectorAll(".featured-product-cards");
      cards.forEach((card, index) => {
        gsap.from(card, {
          y: "20%",
          x: "20",
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            scroller: "body",
            start: "top 80%",
            end: "top top",
          },
        });
      });
    } else {
      gsap.from(".featured-product-cards", {
        x: "100%",
        y: "20%",
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        scrollTrigger: {
          scroller: "body",
          trigger: "#featured-products-container",
          start: "top 60%",
        },
      });
    }
  });

  return (
    <>
      {!loading && (
        <div
          id="products"
          className="featured-products-container bg-transparent "
        >
          <div className="mx-auto  px-4 py-16  sm:px-6 sm:py-10 w-full md:w-[80%]  lg:px-8 ">
            <h2 className="text-2xl  md:text-3xl font-bold tracking-tight text-center text-gray-900">
              Featured Products
            </h2>

            {/* Products Box  */}
            <div className="mt-6  flex flex-wrap justify-center space-x-2 ">
              {products.map(
                (product) =>
                  // Products
                  product.featured && (
                    <Link
                      to={`/product/${product._id}`}
                      key={product._id}
                      className="featured-product-cards my-4 w-full  sm:w-[250px] md:w-[300px] group relative border-2 border-[#dadada]  rounded-lg overflow-hidden pb-4 min-h-fit"
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
      )}
    </>
  );
}

export default HomeProducts;
