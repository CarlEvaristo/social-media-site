import React from 'react'
import "./Profile.css"
import { UserContext } from '../../userContext'
import { useNavigate } from 'react-router-dom'
import Posts from '../Posts/Posts'
import Filter from '../../components/Filter/Filter'
import Axios from 'axios'
import ScrollTop from '../../hooks/useScrollTop';

export default function Profile() {
    const context = React.useContext(UserContext)
    const navigate = useNavigate()
    const [sort, setSort] = React.useState("")

    React.useEffect(()=> {
        ScrollTop()
    },[])
      
    function handleSort(event) {
      setSort(event.target.value)
    }
    
    return (
        <div className='profile'>
            {!context.username ? navigate("/login") : 
                <>  
                    <h1>My Posts</h1>
                    <Posts sort={sort} filter={context.username} /> 
                    <section className="rightBar">
                        <div className="sideMenu">
                            <h2>Filter</h2>
                            <Filter sort={sort} handleSort={handleSort}/>
                        </div>
                        <button className='logoutBtn' onClick={context.logoutHandler}>Logout</button>
                    </section>
                </>
            }
        </div>
    )
}
