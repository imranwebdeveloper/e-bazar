import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <main className="bg-slate-100 min-h-screen  mt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
