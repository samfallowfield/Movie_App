import React, {useState, useEffect} from 'react';
import "../Css/App.css";


const Books = () => {

  const [searchValue, setSearchValue] = useState("");



  return (
    <div className="App">
      <div className="Header">
        {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}

      </div>
    </div>
  );
  }

export default Books;
