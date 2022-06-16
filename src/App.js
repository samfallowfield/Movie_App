import React, {useState, useEffect} from 'react';
import "./Css/App.css";
import NavBar from "./components/Navbar";
import {Route, Link, BrowserRouter, Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Books from './pages/Books';
import Music from './pages/Music';
import MovieCollection from './pages/MovieCollection';
import axios from "./data/axios.config.js";


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
            <Route exact path="/moviecollection" element={<MovieCollection/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
  }

export default App;
