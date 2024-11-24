import React from "react";
import HeaderLogo from "../../assets/image/logo-header.png";
import { Link } from "react-router-dom";
import PrimaryBTN from "../utilities/PrimaryBTN";
import NavLinks from "../utilities/NavLinks";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 bg-[#FFF] w-full z-50 border-b border-primary">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="w-[240px]">
          <Link>
            <img className="w-full" alt="logo" src={HeaderLogo} />
          </Link>
        </div>
        <div className="">
          <ul className="">
            <NavLinks
              to="/"
              className="[&.active]:text-hoverColor"
              title="Get Start"
            />

            <NavLinks
              to="/challange"
              className="[&.active]:text-hoverColor"
              title="Challange"
            />

            <NavLinks
              to="/about"
              className="relative [&.active]:text-hoverColor triangle"
              title="About"
            />
            <PrimaryBTN className="ml-5 !py-3" title="account" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
