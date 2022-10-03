import React from 'react'
import "./PostsList.css"
import Axios from 'axios'
import { Link } from "react-router-dom"

const BASE_URL = 'Socialmediaserver-env.eba-3v5vf2qa.us-east-1.elasticbeanstalk.com' || 'localhost:3001' 
Axios.create({ baseURL: BASE_URL, responseType: 'json' }) 

// const awsURL = 'Socialmediaserver-env.eba-3v5vf2qa.us-east-1.elasticbeanstalk.com'
// const baseURL = awsURL || 'localhost:3001'

export default function PostsList() {
  const [posts, setPosts] = React.useState([])

  React.useEffect(()=> {
    // Axios.get("http://localhost:3001/posts")
    Axios.get("/posts")
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
