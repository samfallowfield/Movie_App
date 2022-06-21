import React from "react";
import { Link } from "react-router-dom";
import "../Css/NavList.css";

export default function NavList() {
  return (
    <div className="NavBar__navlistContainer">
      <ul className="NavBar__navList">
        <li className="NavBar__navItem navItem">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="NavBar__navItem navItem">
          <Link to="/moviecollection">Watchlist</Link>
          </li>
        <li className="NavBar__navItem navItem">
          <Link to="/books">Books</Link>
        </li>
        <li className="NavBar__navItem navItem">
          <Link to="/music">Music</Link>
        </li>
      </ul>
    </div>
  );
}
