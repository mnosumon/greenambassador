import React from "react";
import HeaderLogo from "../../assets/image/logo-header.png";
import { Link, NavLink } from "react-router-dom";
import PrimaryBTN from "../utilities/PrimaryBTN";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 bg-[#FFF] w-full">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="w-[240px]">
          <Link>
            <img className="w-full" alt="logo" src={HeaderLogo} />
          </Link>
        </div>
        <div className="">
          <ul className="">
            <NavLink to="/" className="navLinkStyle">
              Get Start
            </NavLink>
            <NavLink to="/challange" className="navLinkStyle">
              Challange
            </NavLink>
            <NavLink to="/about" className="relative navLinkStyle triangle">
              About
            </NavLink>
            <PrimaryBTN className="ml-5 !py-3" title="account" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
