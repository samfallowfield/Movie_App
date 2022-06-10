import React, { useState, useEffect } from "react";
import "../Css/Movies.css";
import MovieResultCard from "../components/MovieResultCard";
import SearchBox from "../components/SearchBox";

function Movies() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const handleSearchBoxChange = (currentInput) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6e52e2d6d1794cfd580cc886f224c394&language=en-US&page=1&include_adult=false&query=${currentInput}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchText(currentInput);

        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
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
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Movies;
