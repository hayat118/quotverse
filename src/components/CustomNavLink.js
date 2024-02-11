import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, activeIcon, inActiveIcon }) => {
  return (
    <NavLink
      to={to}
      children={({ isActive }) => (isActive ? activeIcon : inActiveIcon)}
    />
  );
};

export default CustomNavLink;
