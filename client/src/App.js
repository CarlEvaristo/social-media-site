import React from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./pages/Home/Home"
import Upload from "./pages/Upload/Upload"
import Login from "./pages/Login/Login"
import Register from "./pages//Register/Register"
import Profile from "./pages/Profile/Profile"
import { Routes, Route, Link } from "react-router-dom"

export default function App() {

  return (
      <div className="app">
          <NavBar/>

          <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/upload" element={<Upload/>} />

              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/profile" element={<Profile/>} />
            </Routes>
          </main>
          
      </div>
  )
} 