import React from "react";
import "../Css/Movies.css";
import axios from "axios";
import MovieResultCard from "../components/MovieResultCard";
import { useState, useEffect } from "react";


export default function App() {

  const [results, setResults] = useState([]);
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
    <div>
      <button className = "toggleButton"onClick={() => handleChange()}>click me</button>
      {toggleWatchlist ?     <ul className="Results">
      {results.map((movie) => (
        <li className="Poster" key={movie.id}>
          <MovieResultCard movie={movie} buttonState={buttonStateDelete} buttonState2={buttonStateWatched}/>
        </li>
      ))}
    </ul> : "Banana"}
    </div>
  );
}