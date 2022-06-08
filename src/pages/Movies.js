import React, { useState, useEffect } from "react";
import "../Css/Movies.css";
import MovieResultCard from "../components/MovieResultCard";
import SearchBox from '../components/SearchBox';
// import MovieList from '../components/MovieList';

function Movies() {
  const [movies, setMovies] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setMovies(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6e52e2d6d1794cfd580cc886f224c394&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
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
        <div className="InputWrapperContainer">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={movies}
              onChange={onChange}
            />
          </div>
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
