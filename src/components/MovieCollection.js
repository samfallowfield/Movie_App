import React from "react";
import "../Css/Movies.css";
import axios from "axios";
import MovieResultCard from "./MovieResultCard";
import { useState, useEffect } from "react";
import MovieManagement from "./MovieManagement";

function MovieCollection() {
  const [results, setResults] = useState([]);

  const buttonStateDelete = "Delete";
  const buttonStateWatched = "Watched";

  useEffect(() => {
      function fetchMovies() {
      axios.get(`http://localhost:3000/movies`).then((res) => {
        setResults(res.data);
      });
    }
    fetchMovies();
  }, []);

  return (
    <ul className="Results">
      {results.map((movie) => (
        <li className="Poster" key={movie.id}>
          <MovieResultCard movie={movie} buttonState={buttonStateDelete} buttonState2={buttonStateWatched}/>
        </li>
      ))}
    </ul>
  );
}

export default MovieCollection;
