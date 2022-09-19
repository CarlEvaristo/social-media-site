import React from "react"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/contact" element={  <Contact /> } /> 
        </Routes>
      </Router>
    </div>
  )
} 