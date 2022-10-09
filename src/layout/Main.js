import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { CartContextProvider } from "../context/CartContext";

const Main = () => {
  return (
    <CartContextProvider>
      <Header />
      <main className="bg-slate-100 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </CartContextProvider>
  );
};

export default Main;
