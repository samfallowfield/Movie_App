import axios from 'axios';
export default axios.create({
    baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=`,
    // headers: {
    //     "Content-Type": "application/json",
    //     "api_key": process.env.REACT_APP_TMDB_KEY
    // }
});