import { CartContextProvider } from "./CartContextProvider";
import ProductsContextProvider from "./ProductsContextProvider";
import UserContextProvider from "./UserContext";

const ContextProvider = ({ children }) => {
  return (
    <ProductsContextProvider>
      <UserContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </UserContextProvider>
    </ProductsContextProvider>
  );
};

export default ContextProvider;
