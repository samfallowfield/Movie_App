import React from 'react';
// import "../App.css";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) =>  (
            <div>

                <img src={movie.Poster} alt='movie'></img>
                <div/>
            </div>
            ))}
        </>
    );
};

export default MovieList;