import React from "react";
import "../Css/NavBar.css";

const SearchBox = (props) => {
  return (
    <div className="search">
      <input
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to Search..."
      ></input>
    </div>
  );
};

export default SearchBox;
