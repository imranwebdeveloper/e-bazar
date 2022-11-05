import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getDataFromLocalStore } from "../utilities/localStorage";
import { ProductsContext } from "./ProductsContextProvider";
export const CartContext = createContext("cart");
const CartContextProvider = ({ children }) => {
  const { data, loading } = useContext(ProductsContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const preShoppingCart = getDataFromLocalStore();
    const newShoppingCart = [];
    if (loading) return;
    for (const key in preShoppingCart) {
      const currentShoppingCart = data.find((item) => item.id === key);
      currentShoppingCart.quantity = preShoppingCart[key];
      newShoppingCart.push(currentShoppingCart);
    }
    setCart(newShoppingCart);
  }, [data, loading]);
  const cartRemoveHandler = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const cartValue = { cart, setCart, cartRemoveHandler };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};
export default CartContextProvider;
