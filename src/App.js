
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Beers from "./pages/Beers"
import Beer from "./pages/Beer"
import './App.css';

export default function App() {
  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/beers" element={<Beers/>}/>
            <Route path="/beers/:beer" element={<Beer/>}/>
          </Routes>
      </Router>
  );
}





