import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { ProductsContext } from "./ProductsContextProvider";

export const CartContext = createContext("cart");

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const { allProducts } = useContext(ProductsContext);
  useEffect(() => {
    const previousCart = JSON.parse(localStorage.getItem("shopping-cart"));

    if (previousCart) {
      const currentCart = [];
      for (const key in previousCart) {
        const item = allProducts.find((item) => item.id === key);
        if (item) currentCart.push(item);
      }
      setCart(currentCart);
    }
  }, [allProducts]);

  const addToCart = (product) => {
    const ti = cart.find((item) => item.id === product.id);
    if (!ti) {
      setCart((pre) => [...pre, product]);
    }
  };

  const cartValue = { cart, loading, addToCart };
  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};
export default CartContextProvider;
