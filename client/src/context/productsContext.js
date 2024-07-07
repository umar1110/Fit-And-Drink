import { createContext, useContext } from "react";

export const productsContext = createContext({
  products: [],
  loading: false,
  error: false,
  success:false,
  errorMessage: "",
  fetchProducts : ()=>{},
  clearErrors : ()=>{}
});


export const ProductsContextProvider = productsContext.Provider;

export default function useProducts() {
  return useContext(productsContext);
}
