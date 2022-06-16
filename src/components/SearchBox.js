import React, { useState } from "react";
import "../Css/SearchBox.css";
import { useLocation} from "react-router-dom";

function SearchBox({ onSearchChange}) {
  const location = useLocation();
  const [searchText, setSearchText] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    onSearchChange(e.target.value, location.pathname);
    setSearchText(e.target.value)
  };

  return (
    <div className="InputWrapperContainer">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default SearchBox;
