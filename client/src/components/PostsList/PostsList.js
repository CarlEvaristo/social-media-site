import React from 'react'
import "./PostsList.css"
import Axios from 'axios'
import { Link } from "react-router-dom"

export default function PostsList() {
  const [posts, setPosts] = React.useState([])

  React.useEffect(()=> {
    Axios.get("http://localhost:3001/posts")
    .then(res => {
        setPosts(res.data)
    })
  },[])

  const userElements = posts.map(post => {
    return (
      <Link to={`/posts/${post.id}`} key={post.id} className='postItem' >
        {post.title}
      </Link>
    )
  })

  return userElements
}
