import React from 'react'
import "./Posts.css"
import Axios from 'axios';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from "react-router-dom"

export default function Posts() {
  const [posts, setPosts] = React.useState([])

  React.useEffect(()=> {
    Axios.get("http://localhost:3001/posts")
    .then(res => setPosts(res.data))
  },[])

  //drga36mnw IS MY CLOUDINARY ID
  const postElements = posts.map(item => (
    <div className="post" key={item.id}>
      <h2>{item.title}</h2>
      <p>author: {item.author}</p>
      <p>{item.description.slice(0,100)}... <Link to={`/posts/${item.id}`}>read more</Link> </p> 
      <Image cloudName="drga36mnw" publicId={item.image}>     
        <Transformation crop="scale" width="500" />
      </Image>
    </div>
  ))

  return (
    <div className='posts'>
        {postElements}
    </div>
  )
}
