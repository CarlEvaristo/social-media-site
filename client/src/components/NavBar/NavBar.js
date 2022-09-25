import React from 'react'
import "./NavBar.css"
import { Link, useLocation } from "react-router-dom"
import { UserContext } from '../../userContext'

export default function NavBar() {
    const context = React.useContext(UserContext)
    const location = useLocation().pathname
    const [menuOn, setMenuOn] = React.useState(false)
    
    function toggleMenu() {
        setMenuOn(prev => !prev)
    }

    return (
        <div className='navbar'>
            <div className='navlogo'>
                <Link className={`navLink ${location === "/" ? "active" : ""}`} to="/">
                    <img src="/images/logo.jpg" alt="logo" style={{width:"50px"}}/> 
                    <h1>PostOwl</h1>
                </Link>
            </div>

            <div className={`navmenu ${ menuOn ? "moveDown" : "moveUp" }`}>
                <Link className={`navLink ${location === "/" ? "active" : ""}`} to="/" onClick={toggleMenu}>Home</Link>
                {/* <Link className={`navLink ${location === "/posts" ? "active" : ""}`} to="/posts">Posts</Link> */}
                {!context.username ?
                    <>
                        <Link className={`navLink ${location === "/login" ? "active" : ""}`} to="/login" onClick={toggleMenu}><i className="fa-regular fa-user"></i>  Login</Link>
                        <Link className={`navLink accent ${location === "/register" ? "active" : ""}`} to="/register" onClick={toggleMenu}>Sign up for free</Link>
                    </>  
                    :
                    <>
                        <Link className={`navLink ${location === "/upload" ? "active" : ""}`} to="/upload" onClick={toggleMenu}>New Post</Link>
                        <Link className={`navLink ${location === "/profile" ? "active" : ""}`} to="/profile" onClick={toggleMenu}>My Posts</Link>
                        <p className="navLink" onClick={context.logoutHandler} onChange={toggleMenu}>Logout</p>
                        <Link className={`navLink ${location === "/profile" ? "active" : ""}`} to="/profile" onClick={toggleMenu}><i className="fa-solid fa-user"></i>  {context.username}</Link>
                    </>
                }
            </div>

            <div className={`hamburgerMenu`} onClick={toggleMenu}>
                    <div className={`hamburgerBar ${menuOn ? "topBar" : undefined}`}></div>
                    <div className={`hamburgerBar ${menuOn ? "middleBar" : undefined}`}></div>
                    <div className={`hamburgerBar ${menuOn ? "bottomBar" : undefined}`}></div>
                </div>

        </div>
    )
}
