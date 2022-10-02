import React from 'react'
import "./NavAdmin.css"
import { useLocation, Link } from "react-router-dom"
import Filter from '../Filter/Filter'
import { UserContext } from '../../userContext'

export default function NavAdmin({sort,handleSort}) {
    const location = useLocation().pathname
    const context = React.useContext(UserContext)

    return ( 
        <div className='navadmin'>
                {context.username && 
                    <>
                    {location === "/upload" && 
                        <>
                            <Link className="adminBtn" to="/profile">My Posts</Link>
                            <button className="adminBtn notmobile" onClick={context.logoutHandler}>Logout</button>
                        </>}
                    {location === "/profile" &&
                        <>  
                            <Link className="adminBtn" to="/upload">New Post</Link>
                            <Filter sort={sort} handleSort={handleSort}/>
                            <button className="adminBtn notmobile" onClick={context.logoutHandler}>Logout</button>
                        </>}
                    {location.includes("/update") &&
                        <>
                            <Link className="adminBtn" to="/profile">My Posts</Link>
                            <Link className="adminBtn notmobile" to="/upload">New Post</Link>
                            <button className='adminBtn notmobile' onClick={context.logoutHandler}>Logout</button>
                        </>}
                    </>
                }
        </div>
    )
}
