import { React, useState } from "react";

import { Link } from "react-router-dom";
import "../Css/NavList.css";

export default function NavList() {
  let [toggleNavlist, setToggleNavlist] = useState(false);

  // const handleChange = () => {
  //   return setToggleNavlist(!toggleNavlist);
  // };

  return (
    <div className="NavList">
      <div className="dropdown">
        <button className="dropbtn">Movies</button>
        <div className="dropdown_content">
          <Link to="/movies">Search for movies</Link>
          <Link to="/mymovies">Watchlist</Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Music</button>
        <div className="dropdown_content">
          <Link to="*">Search for music</Link>
          <Link to="*">Music list </Link>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Books</button>
        <div className="dropdown_content">
          <Link to="*">Search for books</Link>
          <Link to="*">Books list </Link>
        </div>
      </div>
    </div>
  );
}
