import React from "react";
import HeaderLogo from "../../assets/image/logo-header.png";

const Navbar = () => {
  return (
    <nav>
      <div className="w-[240px]">
        <img className="w-full" alt="logo" src={HeaderLogo} />
      </div>
    </nav>
  );
};

export default Navbar;
