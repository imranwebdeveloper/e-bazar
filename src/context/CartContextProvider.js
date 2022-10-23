import { useState } from "react";

import { createContext } from "react";
// import { setDataToLocalStore } from "../utilities/localStorage";

export const CartContext = createContext("cart");

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  // const setCartToLocalStore = (id) => setTotalCart(setDataToLocalStore(id));

  const cartValue = { cart };
  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};
