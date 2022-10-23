import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const ProductsContext = createContext("products");

const ProductsContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomProducts, setRandomProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("db.json");
      const data = await res.json();
      setRandomProduct(data.slice(0, 20));
      setAllProducts(data);
      setLoading(false);
    };
    fetchData();
  }, [setAllProducts]);
  const productValue = { loading, allProducts, randomProducts };
  return (
    <ProductsContext.Provider value={productValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
