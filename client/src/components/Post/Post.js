import React from 'react'
import { Image, Transformation } from 'cloudinary-react'
import { Link } from "react-router-dom" 
import "./Post.css"
import Like from '../Like/Like'
import IconButton from '@mui/material/IconButton'      // npm install @mui/material @emotion/react @emotion/styled
import DeleteIcon from '@mui/icons-material/Delete'  // npm install @mui/icons-material
import {useLocation} from "react-router-dom"

export default function Post({post, deletePost}) {
  const location = useLocation().pathname

  return (
    <div className="postBox">
        {location === "/profile" ? 
        <div className="deleteBtn" >
          <IconButton aria-label="delete" onClick={()=>deletePost(post.id)} >
            <DeleteIcon style={{fontSize:"30"}} sx={{ color: "#000" }}  />
          </IconButton>
        </div>
        :
        <Like postid={post.id} />
        }
        <h2>{post.title}</h2>
        <p>author: {post.author}</p>
        <p>{post.description.slice(0,200)}... <Link to={`/posts/${post.id}`}>read more</Link> </p> 
        <Image cloudName="drga36mnw" publicId={post.image}>     
            <Transformation crop="scale" width="500" />
        </Image>
    </div>
  )
}


