import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="px-3 py-1 ">
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive ? `border-b-2 border-orange-300` : undefined
            }
          >
            Inventory
          </NavLink>
        </li>
        <li className="px-3 py-1 ">
          <NavLink
            className={({ isActive }) =>
              isActive ? `border-b-2 border-orange-300` : undefined
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
