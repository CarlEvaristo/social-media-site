import React from "react"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home/Home"
import Posts from "./pages/Posts/Posts"
import Upload from "./pages/Upload/Upload"
import Login from "./pages/Login/Login"
import Register from "./pages//Register/Register"
import Detail from "./pages/Detail/Detail"
import Profile from "./pages/Profile/Profile"
import Footer from "./components/Footer/Footer"
import { Routes, Route, Link } from "react-router-dom"

export default function App() {

  return (
      <div className="app">
          <NavBar/>

          <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/posts" element={<Posts/>} />
              <Route path="/posts/:id" element={<Detail />} />
              <Route path="/upload" element={<Upload/>} />

              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/profile" element={<Profile/>} />
            </Routes>
            <Footer/>
          </main>
      </div>
  )
} 