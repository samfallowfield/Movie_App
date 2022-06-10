import React, { useState } from "react";
import "../Css/SearchBox.css";

function SearchBox({ onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    onSearchChange(e.target.value);
    setSearchText(e.target.value)
  };

  return (
    <div className="InputWrapperContainer">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchText}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default SearchBox;
