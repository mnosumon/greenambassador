import React from "react";
import HeaderLogo from "../../assets/image/logo-header.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto ">
      <div className="w-[240px]">
        <img className="w-full" alt="logo" src={HeaderLogo} />
      </div>
      <div className="">
        <ul>
          <NavLink className="text-[#009b72] px-3 text-xl font-bold font-nunito">
            Get Start
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
