import React from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./pages/Home/Home"
import Info from "./pages/Info/Info"
import Register from "./pages//Register/Register"
import { Routes, Route, Link } from "react-router-dom"

// npm install simplebar-react
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

import LeftMenu from "./components/LeftMenu"
import RightMenu from "./components/RightMenu"

export default function App() {

  return (
      <div className="app">
          <NavBar/>
          
          <section className="leftSection">
            <SimpleBarReact style={{ height: "90vh" }} >
              <LeftMenu />
            </SimpleBarReact>
          </section>

          <section className="mainSection">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/info" element={<Info/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>
          </section>

          <section className="rightSection">
            <SimpleBarReact style={{ height: "90vh" }}>
              <RightMenu />
            </SimpleBarReact>
          </section>

      </div>
  )
} 