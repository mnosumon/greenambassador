import React from "react";
import Navbar from "../../components/navber/Index";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Index";

const RouteLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RouteLayout;
