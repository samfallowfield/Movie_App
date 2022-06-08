import React from 'react';
import "../Css/Movies.css";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) =>  (
            <div className="poster-position">

                <img src={movie.Poster} alt='movie'></img>
                <div/>
            </div>
            ))}
        </>
    );
};

export default MovieList;