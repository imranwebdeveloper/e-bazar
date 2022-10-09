import { createContext, useEffect, useState } from "react";

export const CartContext = createContext("cart");

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState();
  useEffect(() => {
    const previousCart = localStorage.getItem("previous-cart");
    if (previousCart) {
      setCart(previousCart);
    } else {
      setCart(0);
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
