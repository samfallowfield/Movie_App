import React from "react";
import "../Css/ToggleTest.css";
import axios from "axios";
import { useState, useEffect } from "react";
import UnwatchedMovies from "../components/UnwatchedMovies";
import MovieCollection from "./MovieCollection";

export default function App() {
  const [results, setResults] = useState([]);
  const [unseenResults, setUnseenResults] = useState([]);
  const buttonStateDelete = "Delete";
  const buttonStateWatched = "Watched";
  let [changeText, setChangeText] = useState(true);
  let [toggleWatchlist, setToggleWatchlist] = useState(true);
  const handleChange = () => {
    return setToggleWatchlist(!toggleWatchlist);
  };

  useEffect(() => {
    function fetchMovies() {
      axios.get(`http://localhost:3000/movies`).then((res) => {
        setResults(res.data);
      });
    }
    fetchMovies();
  }, []);

  return (
    <div className="App">
        <div className="ButtonContainer">
            <div className= "Button">
      <button className="toggleButton" onClick={() => handleChange()}>
        {toggleWatchlist ? "Show unseen movies" : "Show all movies"}
      </button>
      </div>
      </div>
      <div>{toggleWatchlist ? <MovieCollection /> : <UnwatchedMovies />}</div>
    </div>
  );
}
