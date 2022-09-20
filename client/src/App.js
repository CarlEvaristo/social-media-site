import React from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Info from "./pages/Info"
import Register from "./pages/Register"
import { Routes, Route, Link } from "react-router-dom"

export default function App() {

  return (
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/info" element={<Info/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </main>
      </div>
  )
} 