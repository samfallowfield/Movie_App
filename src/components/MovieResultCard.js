import React from 'react';
import '../Css/Movies.css';


function MovieResultCard({movie}) {
  return (
    <div className="ResultCard">
        <div className="PosterWrapper">
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} poster`} />
            ) : (
            <div className="Filler-Poster"> </div> 
            )}
        </div>

        <div className="Info">
            <div className="InfoHeader">
                <h3 className="title">{movie.title}</h3>
                <h4 className="release-date">{movie.release_date}</h4>
                <h4 className="genre">{movie.genre}</h4>
            </div>
        </div>
    </div>
  )
}

export default MovieResultCard