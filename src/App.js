import React, {useState, useEffect} from 'react';
import "./Css/App.css";
import NavBar from "./components/Navbar";
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/SearchMovies';
import Books from './pages/Books';
import Music from './pages/Music';
import axios from "./data/axios.config.js";
import MyMovies from './pages/MyMovies';
import { useLocation } from 'react-router-dom';


function App() {

  const location = useLocation();

  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");




    const getMovieList = () => {
      axios.get(searchText).then((res) => {
        setResults(res.data.results)
      });
    }

    useEffect(() => {
      switch(location) {
        case "/movies":
          getMovieList();
      }
    }, [searchText, location]);
    
  //   switch(location){
  //     case "/movies":
  //       axios.get(`${currentInput}`).then((res) => {
  //         setResults(res.data.results);
  //       });
    
    




  return (
      <div className="App">
          <NavBar getMovieList = {setSearchText} />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/movies" element={<Movies results ={results}/>}/>
            <Route exact path="/books" element={<Books/>}/>
            <Route exact path="/music" element={<Music/>}/>
            <Route exact path="/mymovies" element ={<MyMovies/>}/>
        </Routes>
      </div>
  );
  }

export default App;
