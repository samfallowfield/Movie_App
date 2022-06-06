import React from "react";
import "../Css/NavBar.css";
import {Link} from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <ul className="navList">
        <li className="navItem">Flannelfields</li>
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <input
            className="SearchBox"
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Type to Search..."
          ></input>
        </li>
        <li className="navItem">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="navItem">
          <Link to="/books">Books</Link>
        </li>
        <li className="navItem">
          <Link to="/music">Music</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
