import React from 'react';
import '../Css/Movies.css';
import MovieManagement from './MovieManagement';



function MovieResultCard({movie, buttonState, buttonState2}) {
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
                <p className="release_date">
                    {movie.release_date ? movie.release_date.substring(0, 4) : `-`}
                </p>
                <p className="overview">{movie.overview}</p>
                <MovieManagement className="postButton" movie={movie} buttonStateForChildren={buttonState} buttonStateWatched={buttonState2}/>
            </div>
        </div>
    </div>
  )
}

export default MovieResultCard