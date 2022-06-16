import React from "react";
import Switch from "react";
import "../Css/NavBar.css";
import { Link, Route} from "react-router-dom";
import SiteTitle from "./SiteTitle";
import NavList from "./NavList";
import SearchBox from "./SearchBox";
import "../Css/Movies.css";

const NavBar = ({ handleSearchBoxChange }) => {
  return (
    <div className="NavBar__container">
      <SiteTitle />
      <SearchBox onSearchChange={handleSearchBoxChange} />
      <NavList />
    </div>
  );
};

export default NavBar;
