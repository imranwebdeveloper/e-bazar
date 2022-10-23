import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import UserAvatar from "./UserAvatar";

const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="px-3 py-1 ">
          {user ? (
            <UserAvatar />
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? `border-b-2 border-orange-300` : undefined
              }
              to="/user/login"
            >
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
