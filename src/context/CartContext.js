import { useState } from "react";

import { createContext } from "react";
import { setDataToLocalStore } from "../utilities/localStorage";

export const CartContext = createContext("cart");

export const CartContextProvider = ({ children }) => {
  const [totalCart, setTotalCart] = useState([]);

  const setCartToLocalStore = (id) => setTotalCart(setDataToLocalStore(id));

  const cart = { totalCart, setCartToLocalStore };
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
