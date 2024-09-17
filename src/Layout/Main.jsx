import React from "react";

import "../style/style.css";
import Navbar from "../component/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import MainFooter from "../component/footer/MainFooter";

const Main = () => {
  const location = useLocation();
  const noNavbarFooter = location?.pathname.includes("/register");
  return (
    <div>
      <header id="header">
        {noNavbarFooter ? "" : <Navbar></Navbar>}
        <Outlet></Outlet>
        {noNavbarFooter ? "" : <MainFooter></MainFooter>}
      </header>
    </div>
  );
};

export default Main;
