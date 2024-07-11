import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductPage.css"
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let errorMessage = "Product Updation failed";
  const navigate = useNavigate();
  const fetchProduct = async () => {
    try {
     
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/product/${id}`
      );

      setProduct(data.product);
      setLoading(false);
    } catch (error) {
      errorMessage = error.response.data.message;
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    
    if (error) {
      toast.error(errorMessage);
      navigate("/");
    } else {
      fetchProduct();
    }
   
  }, [error]);

  return (
    <>
      {product && (
        <>
          {loading ? (
            <></>
          ) : (
            <div className="Product-Oage py-16  md:pt-[5rem] lg:w-[90%] xl:w-[80%]  mx-auto">
              {/* Images and features */}
              <div className="image-feature-name md:flex h-fit md:space-x-6  md:items-center lg:items-start ">
                <Carousel className="w-full text-center md:w-1/2 lg:w-[50%] ">
                  {product.images.map((i,idx) => 
                    
                      <div>
                        <img
                        key={idx}
                          src={i.url}
                          alt={i.url}
                          className="md:rounded-2xl"
                        />
                        <p className="legend">{product.title}</p>
                      </div>
                    
                  )}
                </Carousel>

                <div className="name-features w-full md:w-1/2 px-4  md:px-0 ">
                  <h1 className="product-name text-center text-3xl">
                    {product.title}
                  </h1>
                  <div
                    className="html-string product-features  "
                    dangerouslySetInnerHTML={{ __html: product.features }}
                  ></div>
                </div>
              </div>

              {/* Specifications */}
              <div className="specs my-6 space-y-7 px-2 md:px-0">
                <h3 className="Spec-heading font-semibold text-4xl text-center">
                  Specifications
                </h3>
                <div
                  className="html-string product-features border-2 md:text-xl "
                  dangerouslySetInnerHTML={{ __html: product.specs }}
                ></div>
              </div>

              {/* Overview */}
              <div className="overview 3">
                <h3 className="Spec-heading font-semibold text-4xl text-center mb-3">
                  Overview
                </h3>
                <div
                  className="html-string  html-string-overview product-features md:text-lg  "
                  dangerouslySetInnerHTML={{ __html: product.overview }}
                ></div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ProductPage;
