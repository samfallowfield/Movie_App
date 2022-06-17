import React from "react";
import "../Css/Movies.css";
import axios from "axios";
import MovieResultCard from "../components/MovieResultCard";
import { useState, useEffect } from "react";
import markAsSeen from "../components/MovieManagement";

function MovieCollection() {
  const [results, setResults] = useState([]);

  const buttonStateDelete = "Delete";

  useEffect(() => {
    async function fetchMovies() {
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
          <MovieResultCard movie={movie} buttonState={buttonStateDelete} />
          <button
            className="watchedButton"
            onClick={() => markAsSeen(markAsSeen)}
          >
            Mark as Watched
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MovieCollection;
