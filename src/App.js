import React, {useState, useEffect} from 'react';
import "./Css/App.css";
import NavBar from "./components/Navbar";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/SearchMovies';
import Books from './pages/Books';
import Music from './pages/Music';
import axios from "./data/axios.config.js";
import MyMovies from './pages/MyMovies';


function App() {

  const [results, setResults] = useState([]);

  const handleSearchBoxChange = (currentInput, location) => {
    
    switch(location){
      case "/movies":
        axios.get(`${currentInput}`).then((res) => {
          setResults(res.data.results);
        });
    
    }
  };



  return (
    <BrowserRouter>
      <div className="App">
          <NavBar handleSearchBoxChange = {handleSearchBoxChange} />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/movies" element={<Movies results ={results}/>}/>
            <Route exact path="/books" element={<Books/>}/>
            <Route exact path="/music" element={<Music/>}/>
            <Route exact path="/mymovies" element ={<MyMovies/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
  }

export default App;
