import React, { useEffect, useState } from "react";
import useProducts from "../../../context/productsContext";
import { toast } from "react-toastify";
import axios from "axios";

function AllProducts() {
  const { products, fetchProducts } = useProducts();
  const [deleted, setdeleted] = useState(false);

  const handleDelete = async (id) => {
    try {
      toast.loading("Deleting product");
      const { data } = await axios.delete(
        `http://localhost:4000/api/v1/product/${id}`
      );
      toast.dismiss();
      if (data.success) {
        toast.success("Product Deleted Successfulyy");
        setdeleted(true);
      } else {
        toast.error(data.message || "Product Deletion failed");
        setdeleted(false);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error.response.data.message || "Product Deletion failed");

      setdeleted(false);
    }
  };

  const handleFeaturedChange = async (id) =>{
    try {
      toast.loading("Updating product");
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/product/${id}`
      );
      toast.dismiss();
      if (data.success) {
        toast.success("Product Updated Successfulyy");
        setdeleted(true);
      } else {
        toast.error(data.message || "Product Updation failed");
        setdeleted(false);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error.response.data.message || "Product Updation failed");

      setdeleted(false);
    }
  }
  
  useEffect(() => {
    fetchProducts();

    if(deleted){
      setdeleted(false)
    }
    console.log("asdasdas");
  }, [deleted]);

  return (
    <>
      {
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Product ID
              </th>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Product Name
              </th>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Featured
              </th>
              <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {products &&
              products.map((p) => {
                return (
                  <tr
                    key={p._id}
                    className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                  >
                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Product Id
                      </span>
                      {p._id}
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Product Name
                      </span>
                      {p.title}
                    </td>

                    <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Featured
                      </span>
                      <input type="checkbox" 
                      checked={p.featured} onChange={()=>{
                        handleFeaturedChange(p._id)
                      }} />
                    </td>
                    <td className="w-full lg:w-auto p-3 text-gray-800 order border-b text-center block lg:table-cell relative lg:static">
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        Actions
                      </span>

                    
                      <button
                        onClick={async () => {
                          await handleDelete(p._id);
                        }}
                        className="text-blue-400 hover:text-blue-600 underline pl-6"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      }
    </>
  );
}

export default AllProducts;
