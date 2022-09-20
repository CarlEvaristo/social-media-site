import React from 'react'
import "./NavBar.css"
import { Link, useLocation } from "react-router-dom"

export default function NavBar() {
    const location = useLocation().pathname

    return (
        <div className='navbar'>
            <Link className={`navLink ${location === "/" ? "active" : ""}`} to="/">Home</Link>
            <Link className={`navLink ${location === "/info" ? "active" : ""}`} to="/info">Info</Link>
            <Link className={`navLink ${location === "/register" ? "active" : ""}`} to="/register">Register</Link>
        </div>
    )
}
