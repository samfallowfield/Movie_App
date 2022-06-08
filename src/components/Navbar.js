import React from "react";
import "../Css/NavBar.css";
import {Link} from "react-router-dom";
import SiteTitle from "./SiteTitle";
import NavList from "./NavList";

const NavBar = () => {
  return (
    <div className= "NavBar__container">
      <SiteTitle />
      <NavList />
      </div>
  );
};

export default NavBar;