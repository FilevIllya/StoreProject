import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink>Fake Store</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Cart</NavLink>
    </nav>
  );
};

export default Header;
