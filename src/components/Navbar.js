import React from "react";
import Switch from "react";
import "../Css/NavBar.css";
import { Link, Route} from "react-router-dom";
import SiteTitle from "./SiteTitle";
import NavList from "./NavList";
import SearchBox from "./SearchBox";
import "../Css/Movies.css";

const NavBar = ({ getMovieList }) => {
  return (
    <div className="NavBar__container">
      <SiteTitle />
      <SearchBox onSearchChange={getMovieList} />
      <NavList />
    </div>
  );
};

export default NavBar;
