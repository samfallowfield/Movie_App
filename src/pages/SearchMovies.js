import React from "react";
import "../Css/Movies.css";
import MovieResultCard from "../components/MovieResultCard";

function SearchMovies({results}) {


  const buttonStateAdd = "Add";

  return (
    <div className="Movies">
      <div className="Container">
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

export default SearchMovies;
