import React from "react";
import "../Css/Movies.css";
import axios from "axios";
import MovieResultCard from "../components/MovieResultCard";
import { useState } from "react";

function MovieCollection() {

  const [results, setResults] = useState([]);

  const buttonStateDelete = "Delete";


    axios.get(
        `http://localhost:3000/movies`
    )
    .then(res => { 
        setResults((res.data));
      })

  return (

 
        <ul className="Results">
          {results.map((movie) => (
            <li className="Poster" key={movie.id}>
              <MovieResultCard movie={movie} buttonState={buttonStateDelete} />
            </li>
          ))}
        </ul>
  );
          }
    


export default MovieCollection;
