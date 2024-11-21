import React from "react";
import HeaderLogo from "../../assets/image/logo-header.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
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
          <button className="px-5 py-2 bg-primary text-subHeading text-xl font-bold font-nunito hover:bg-hoverColor transition-all ease-in-out duration-300 rounded-full ml-5">
            Account
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
