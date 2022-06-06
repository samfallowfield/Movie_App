import React, {useState, useEffect} from 'react';
import "./Css/App.css";
import {Route, Link, BrowserRouter, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Books from './pages/Books';
import Music from './pages/Music';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/movies" element={<Movies/>}/>
      <Route exact path="/books" element={<Books/>}/>
      <Route exact path="/music" element={<Music/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
  }

export default App;
