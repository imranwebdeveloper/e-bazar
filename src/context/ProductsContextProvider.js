import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { CartContext } from "./CartContextProvider";

export const ProductsContext = createContext("products");

const ProductsContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomProducts, setRandomProduct] = useState([]);
  const setCart = useContext(CartContext);

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
