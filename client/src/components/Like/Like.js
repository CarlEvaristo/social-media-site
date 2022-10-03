import React from 'react'
import IconButton from '@mui/material/IconButton'      // npm install @mui/material @emotion/react @emotion/styled
import ThumbUpIcon from '@mui/icons-material/ThumbUp'  // npm install @mui/icons-material
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import { UserContext } from '../../userContext'
import { useNavigate } from "react-router-dom" 
import Axios from 'axios'
import "./Like.css"

export default function Like({postid}) {
  const navigate = useNavigate()
  const context = React.useContext(UserContext)
  const [likes, setLikes] = React.useState([])
  const [isLiked, setIsLiked] = React.useState(false)

  React.useEffect(()=> {
    // Axios.get(`http://localhost:3001/like/${postid}`)
    Axios.get(`/like/${postid}`)
      .then(response => {
        setLikes(response.data)
      })
  },[])

  React.useEffect(()=> {
    (likes.filter(like => like.username === context.username)).length ? setIsLiked(true) : setIsLiked(false)  
  },[likes])


  function handleLike(postId){
    isLiked ? console.log("like already exists") : 
    // Axios.post("http://localhost:3001/like", {username: context.username, postid:postId})
    Axios.post("/like", {username: context.username, postid:postId})
      .then(res => {
        // Axios.get(`http://localhost:3001/like/${postid}`)
        Axios.get(`/like/${postid}`)
        .then(res1 => {
          setLikes(res1.data)
          setIsLiked(true)
        })  
      })
  }

  function handleUnlike(postId){
      // Axios.delete(`http://localhost:3001/like`, { data: { postid:postId, username:context.username} })
      Axios.delete(`/like`, { data: { postid:postId, username:context.username} })
        .then(res => {
          // Axios.get(`http://localhost:3001/like/${postid}`)
          Axios.get(`/like/${postid}`)
          .then(res2 => {
            setLikes(res2.data)
            setIsLiked(false)
          })  
      })
  }

  return (
    <div className='likeBtn'>
        <IconButton aria-label="delete">
        {context.username ? 
        <>
            { isLiked ? <ThumbUpIcon style={{fontSize:"30"}} sx={{ color: "#000" }} onClick={()=>handleUnlike(postid)} /> :
            <ThumbUpOutlinedIcon style={{fontSize:"30"}} sx={{ color: "#000" }} onClick={()=>handleLike(postid)} /> }
        </> :
        <ThumbUpIcon style={{fontSize:"30"}} sx={{ color: "#e4e4e5" }} onClick={()=>navigate("/login")} />
        }
        </IconButton>
        <p>{likes && likes.length}</p>
    </div>
  )
}


