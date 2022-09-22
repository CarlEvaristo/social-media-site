import React from 'react'
import "./Profile.css"
import { UserContext } from '../../userContext'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const context = React.useContext(UserContext)
    const navigate = useNavigate()

    return (
        <div className='profile'>
            {!context.username ? navigate("/login") : 
                <>
                    <h1>Profile</h1>
                    <button onClick={context.logoutHandler}>Logout</button>
                </>
            }
        </div>
    )
}
