import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./component/admin/dashboard/AdminDashboard";
import DashboardHome from "./component/admin/dashboard/DashboardHome";
import AddProduct from "./component/admin/products/AddProduct";
import AdminProducts from "./component/admin/products/AdminProducts";
import AllProducts from "./component/admin/products/AllProducts";
import Dashboard from "./dashboard/Dashboard";
import Home from "./component/home/Home";
import NavBar from "./component/layouts/NavBar";
import { ProductsContextProvider } from "./context/productsContext.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminServices from "./component/admin/services/AdminServices.jsx";
import AllServices from "./component/admin/services/AllServices.jsx";
import AddServices from "./component/admin/services/AddServices.jsx";
import ProductPage from "./component/Product/ProductPage.jsx";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setsuccess] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/api/v1/products");

      if (!response.ok) {
        setLoading(false);
        setError(true);
        setErrorMessage("Products fetching failed.");
      }

      const data = await response.json();
      setProducts(data.products);

      setLoading(false);
      setsuccess(true);
    } catch (error) {
      setsuccess(false);
      setError(true);
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const clearErrors = () => {
    setError(false);
    setErrorMessage("");
  };

  useEffect(() => {
    fetchProducts();
 
    if (error) {
      clearErrors();
    }
  }, [error, success]);

  return (
    <>
     {!loading &&  <ProductsContextProvider
        value={{
          products,
          loading,
          error,
          errorMessage,
          fetchProducts,
          clearErrors,
          success,
        }}
      >
        <div className="app p-0 m-0 max-w-screen overflow-hidden">
          <BrowserRouter>
            <NavBar />

            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route path="/product/:id" element= {<ProductPage/>} />
             
              <Route exact path="/admin-dashboard" element={<Dashboard />} />
              <Route exact path="/admin/dashboard" element={<AdminDashboard />}>
                <Route exact path="" element={<DashboardHome />} />

                <Route exact path="products" element={<AdminProducts />}>
                  <Route exact path="" element={<AllProducts />} />
                  <Route exact path="upload" element={<AddProduct />} />
                </Route>

                <Route exact path="services" element={<AdminServices />}>
                  <Route exact path="" element={<AllServices />} />
                  <Route exact path="upload" element={<AddServices />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
        <ToastContainer id="main" closeOnClick stacked closeButton />
      </ProductsContextProvider>}
    </>
  );
}

export default App;
