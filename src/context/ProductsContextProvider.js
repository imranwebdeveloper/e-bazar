import React, { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromLocalStore } from "../utilities/localStorage";

export const ProductContext = createContext("products");
const ProductsContextProvider = ({ children }) => {
  const allProduct = useLoaderData();
  const randomProducts = allProduct.slice(0, 20);
  const products = { allProduct, randomProducts };
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
