import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext("cart");
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(0);

  useEffect(() => {
    const previousCart = JSON.parse(localStorage.getItem("shopping-cart"));
    if (previousCart) {
      const currentCart = Object.keys(previousCart).length;
      setCart(currentCart);
    }
  }, []);

  const cartValue = { cart, setCart };
  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};
export default CartContextProvider;
