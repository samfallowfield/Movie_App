import React, {useState, useEffect} from 'react';
import "../Css/App.css";
import NavBar from "../components/Navbar";

const Books = () => {

  const [searchValue, setSearchValue] = useState("");



  return (
    <div className="App">
      <div className="Header">
        <NavBar></NavBar>
        {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}

      </div>
    </div>
  );
  }

export default Books;
