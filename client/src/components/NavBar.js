import React from 'react'
import "./NavBar.css"
import { Link, useLocation } from "react-router-dom"
import { UserContext } from '../userContext'

export default function NavBar() {
    const context = React.useContext(UserContext)
    const location = useLocation().pathname

    return (
        <div className='navbar'>
            <div className='navlogo'>

            </div>

            <div className="navmenu">
                <Link className={`navLink ${location === "/" ? "active" : ""}`} to="/">Home</Link>
                <Link className={`navLink ${location === "/upload" ? "active" : ""}`} to="/upload">Upload</Link>

                {!context.username ?
                    <>
                        <Link className={`navLink ${location === "/login" ? "active" : ""}`} to="/login"><i class="fa-regular fa-user"></i>  Login</Link>
                        <Link className={`accentLink ${location === "/register" ? "active" : ""}`} to="/register">Sign up for free</Link>
                    </>  :
                        <Link className={`navLink ${location === "/profile" ? "active" : ""}`} to="/profile"><i class="fa-solid fa-user"></i>  {context.username}</Link>
                }
            </div>

        </div>
    )
}
