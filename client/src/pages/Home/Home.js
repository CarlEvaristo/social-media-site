import React from 'react'
import "./Home.css"
//npm install simplebar-react
//npm install cloudinary-react
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Posts from '../Posts/Posts';
import UsersList from '../../components/UsersList/UsersList';
import PostsList from '../../components/PostsList/PostsList';
import Filter from '../../components/Filter/Filter';
import ScrollTop from '../../hooks/useScrollTop';

export default function Home() {
  const [sort, setSort] = React.useState("")
  const [filter, setFilter] = React.useState(null)

  React.useEffect(()=> {
    ScrollTop()
  },[])

  function handleSort(event) {
    setSort(event.target.value)
  }
 
  return (
    <div className='home'>

      <section className="leftSection">
        <SimpleBar style={{ maxHeight: "90vh" }}>
          <div className="sideMenu">
            <h2>All Posts</h2>
            <PostsList />
          </div>
        </SimpleBar>
      </section>

      <section className="mainSection">
        {/* "default" is no filter / "author" is only logged in users posts */}
        <Posts sort={sort} filter={filter}/>  
      </section>
      
      <section className="rightSection">
        <SimpleBar style={{ maxHeight: "90vh" }}>
          <div className="sideMenu">
            <h2>Filter</h2>
            <Filter sort={sort} handleSort={handleSort}/>
            <h2>All Authors</h2>
            <UsersList setFilter={setFilter} />
          </div>
        </SimpleBar>
      </section>
    </div>
  )
}
