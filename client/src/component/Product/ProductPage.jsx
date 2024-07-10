import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProduct = async () => {
    try {
      console.log("request for product");
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/product/${id}`
      );

      if (data.success) {
        setProduct(data.product);
     
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      toast.error(error.response.data.message || "Product Updation failed");

      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchProduct();
    if (error) {
      setError(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="mt-24">
          <div
            className="html-string"
            dangerouslySetInnerHTML={{ __html: product.specs }}
          >
            
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
