import React from 'react'
import "./Home.css"
import Axios from 'axios';

//npm install simplebar-react
//npm install cloudinary-react
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Image, Transformation } from 'cloudinary-react';
import { Link, useNavigate } from "react-router-dom"

export default function Home() {
  const [posts, setPosts] = React.useState([])
  const [users, setUsers] = React.useState([])
  const navigate = useNavigate()

  React.useEffect(()=> {
    Axios.get("http://localhost:3001/posts")
    .then(res => setPosts(res.data))

    Axios.get("http://localhost:3001/user/users")
    .then(res => setUsers(res.data))
  },[])

  const postElements = posts.map(post => (
    <div className="post" key={post.id} onClick={()=>navigate(`/posts/${post.id}`)}>
      <h2>{post.title}</h2>
      <p>author: {post.author}</p>
      <p>{post.description.slice(0,100)}... <Link to={`/posts/${post.id}`}>read more</Link> </p>
      <Image cloudName="drga36mnw" publicId={post.image}>     //drga36mnw IS MY CLOUDINARY ID
        <Transformation crop="scale" width="500" />
      </Image>
    </div>
  ))

  const titleElements = posts.map(post => (
    <div onClick={()=>navigate(`/posts/${post.id}`)} key={post.id}>{post.title} </div> //I used navigate instead of Link, bc I want to have a clickable div
  ))

  const userElements = users.map(user => (
    <p key={user.id}>{user.username}</p>
  ))

  return (
    <div className='home'>

      <section className="leftSection">
        <SimpleBar style={{ maxHeight: "90vh" }}>
          <div className="sideMenu">
            <h1>All Posts</h1>
            {titleElements}
          </div>
        </SimpleBar>
      </section>

      <section className="mainSection">
        {postElements}
      </section>
      
      <section className="rightSection">
        <SimpleBar style={{ maxHeight: "90vh" }}>
          <div className="sideMenu">
            <h1>All Users</h1>
            {userElements}
          </div>
        </SimpleBar>
      </section>
    </div>
  )
}
