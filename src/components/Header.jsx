import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black shadow p-[1rem_5%] static w-full">
      <nav className="flex justify-between items-center h-full ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold text-lg " : "text-blue-900"
          }
        >
          Fake Store
        </NavLink>

        <div className="flex space-x-4">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold text-lg" : "text-blue-900"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold text-lg" : "text-blue-900"
            }
          >
            Cart
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
