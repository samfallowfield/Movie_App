import React from "react";
import "../Css/Movies.css";
import axios from "axios";
import MovieResultCard from "../components/MovieResultCard";
import { useState, useEffect } from "react";


function UnwatchedMovies() {
    const [results, setResults] = useState([]);

    const buttonStateDelete = "Delete";
    const buttonStateWatched = "Watched";
  
    useEffect(() => {
        function fetchMovies() {
        axios.get(`http://localhost:3000/movies`, {params: {"seen": false}}).then((res) => {
          setResults(res.data.filter((movie) => movie.seen === false));
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

export default UnwatchedMovies