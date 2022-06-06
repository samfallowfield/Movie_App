import React, {useState, useEffect} from 'react';
import "../Css/App.css";
import NavBar from "../components/Navbar";
// import SearchBox from '../components/SearchBox';
// import MovieList from '../components/MovieList';


function Movies()  {

    const [movies, setMovies] = useState([]);




  return ( 
    <div className="Movies">
      <div className="Header">
        <NavBar></NavBar>
        {/* <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /> */}
      </div>
    </div>
  );
  }

export default Movies;
