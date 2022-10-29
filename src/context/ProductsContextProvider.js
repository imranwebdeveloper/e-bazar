import React, { createContext } from "react";

import useFetch from "../hook/useFetch";

export const ProductsContext = createContext("products");
const ProductsContextProvider = ({ children }) => {
  const { data, loading } = useFetch("db.json");

  const productValue = { loading, data };
  return (
    <ProductsContext.Provider value={productValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
