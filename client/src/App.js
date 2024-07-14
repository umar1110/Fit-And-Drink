import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./component/admin/dashboard/AdminDashboard";
import DashboardHome from "./component/admin/dashboard/DashboardHome";
import AddProduct from "./component/admin/products/AddProduct";
import AdminProducts from "./component/admin/products/AdminProducts";
import AllProducts from "./component/admin/products/AllProducts";
import Home from "./component/home/Home";
import NavBar from "./component/layouts/NavBar";
import { ProductsContextProvider } from "./context/productsContext.js";
import Footer from "./component/layouts/Footer/Footer.jsx"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adminmessages from "./component/admin/messages/Adminmessages.jsx";
import AdminUsers from "./component/admin/users/AdminUsers.jsx";
import ProductPage from "./component/Product/ProductPage.jsx";
import { MeContextProvider } from "./context/meContext.js";
import LoginPage from "./component/admin/LoginPage.jsx";
import ProtectedRoute from "./ProtectedRoute.js";
import AllUsers from "./component/admin/users/AllUsers.jsx";
import AddUser from "./component/admin/users/AddUser.jsx";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setsuccess] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const url = `/api/v1/products`;
      const response = await fetch(url);

      if (!response.ok) {
        setLoading(false);
        setsuccess(false)
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
   
  }, [error]);

  const [me, setMe] = useState(null);
  const [meLoading, setmeLoading] = useState(true);
  const [meerror, setmeError] = useState(false);
const [mesuccess, setmesuccess] = useState(false)
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const fetchMe = async () => {
    try {
      setmeLoading(true);
      const url = `/api/v1/me`;
      const response = await fetch(url);

      const data = await response.json();

      if (data.success) {
        setMe(data.admin);

        setisAuthenticated(true);
        setmesuccess(true)
       
      } else {
       
        setmeError(true);
        setmesuccess(false)
        setisAuthenticated(false);
      }
    } catch (error) {
      
      setmesuccess(false)

      setisAuthenticated(false);
      setmeError(true);
    } finally {
      setmeLoading(false);
    }
  };
  useEffect(() => {
    

    if (meerror) {
      setmeError(null);
    }

  
    fetchMe();
  }, [isAuthenticated]); // Empty dependency array to run only once

  return (
    <>
      {!loading && (
        <MeContextProvider
          value={{
            me: me,
            loading: meLoading,
            error: meerror,
            isAuthenticated: isAuthenticated,
            fetchMe: fetchMe,
            clearErrors: () => {
              setmeError(null);
            },
          }}
        >
          <ProductsContextProvider
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
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/admin/login" element={<LoginPage />} />

                  <Route
                    path="/admin/dashboard"
                    element={
                      <ProtectedRoute isAuthenticated={isAuthenticated} loading={meLoading}>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  >
                    <Route exact path="" element={<DashboardHome />} />
                    <Route
                      path="products"
                      element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}  loading={meLoading}>
                          <AdminProducts />
                        </ProtectedRoute>
                      }
                    >
                      <Route exact path="" element={<AllProducts />} />
                      <Route exact path="upload" element={<AddProduct />} />
                    </Route>
                    <Route
                      path="users"
                      element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}  loading={meLoading}>
                          <AdminUsers />
                        </ProtectedRoute>
                      }
                    >
                      <Route exact path="" element={<AllUsers />} />
                      <Route exact path="upload" element={<AddUser />} />
                    </Route>
                    <Route
                      path="messages"
                      element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}  loading={meLoading}>
                          <Adminmessages />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="users"
                      element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}  loading={meLoading}>
                          <AdminUsers />
                        </ProtectedRoute>
                      }
                    />
                  </Route>
                </Routes>
                <Footer/>
              </BrowserRouter>
            </div>
            <ToastContainer id="main" closeOnClick stacked closeButton />
          </ProductsContextProvider>
        </MeContextProvider>
      )}
    </>
  );
}

export default App;
