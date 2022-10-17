import React from "react";
import Cart from "./Cart";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className="fixed-container flex gap-4 border-b-2 items-center py-3">
        <Logo />
        <Search />
        <div className=" flex">
          <Cart />
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
