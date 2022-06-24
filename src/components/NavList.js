import {React, useState} from "react";
import { Link } from "react-router-dom";
import "../Css/NavList.css";

export default function NavList() {

  let [toggleNavlist, setToggleNavlist] = useState(false);

const handleChange = () => {
  return setToggleNavlist(!toggleNavlist);
}

  return (
    <div className="NavList">
      <div class="dropdown">
        <button class="dropbtn">Movies</button>
        <div class="dropdown_content">
          <Link to="/movies">Search for movies</Link>
          <Link to="/moviecollection">Watchlist</Link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Music</button>
        <div class="dropdown_content">
          <Link to="*">Search for music</Link>
          <Link to="*">Music list </Link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Books</button>
        <div class="dropdown_content">
          <Link to="*">Search for books</Link>
          <Link to="*">Books list </Link>
        </div>
      </div>
    </div>
  );
}
