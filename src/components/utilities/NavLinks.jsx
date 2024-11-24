import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ title, className, to }) => {
  return (
    <NavLink
      to={to}
      className={`px-3 text-primary text-xl font-bold font-nunito hover:text-hoverColor transition-all ease-in-out duration-300 capitalize ${className}`}
    >
      {title}
    </NavLink>
  );
};

export default NavLinks;
