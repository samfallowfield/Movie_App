import React, { useState, useEffect } from "react";
import "../Css/Movies.css";
import MovieResultCard from "../components/MovieResultCard";
import SearchBox from "../components/SearchBox";
import axios from '../data/axios.config.js';
import PostMovie from "../components/PostMovie";

function Movies() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

    const addTocollection = (movie) => {
        axios.post(`https://localhost:3000/api/movies`,{
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            release_date: movie.release_date
        })
    }

//   const baseURL = "https://api.themoviedb.org/3/search/movie?api_key=6e52e2d6d1794cfd580cc886f224c394&language=en-US&page=1&include_adult=false&query=";

  const handleSearchBoxChange = (currentInput) => {
    axios.get(
      `${currentInput}`
    )
        .then(res => {
          setResults(res.data.results)
        })
    };



  return (
    <div className="Movies">
      <div className="Container">
        <div className="SearchBoxContainer">
          <SearchBox onSearchChange={handleSearchBoxChange} />
        </div>
        {results.length > 0 && (
          <ul className="Results">
            {results.map((movie) => (
              <li className="Poster" key={movie.id}>
                <MovieResultCard movie={movie} />
                <button onClick={addTocollection}>Add to collection</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Movies;
