import React from "react";
import { CartContextProvider } from "./CartContext";
import { UserContextProvider } from "./UserContext";

const ContextProvider = ({ children }) => {
  return (
    <UserContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </UserContextProvider>
  );
};

export default ContextProvider;
