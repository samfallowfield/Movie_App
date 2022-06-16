import React, { useState } from "react";
import "../Css/Movies.css";
import MovieResultCard from "../components/MovieResultCard";
import SearchBox from "../components/SearchBox";
import axios from "../data/axios.config.js";

function Movies({results}) {


  const buttonStateAdd = "Add";

  return (
    <div className="Movies">
      <div className="Container">
        <div className="SearchBoxContainer">
        </div>
        {results.length > 0 && (
          <ul className="Results">
            {results.map((movie) => (
              <li className="Poster" key={movie.id}>
                <MovieResultCard movie={movie} buttonState={buttonStateAdd} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Movies;
