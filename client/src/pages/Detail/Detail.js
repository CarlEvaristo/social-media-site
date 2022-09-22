import React from 'react'
import "./Detail.css"
import { UserContext } from '../../userContext'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from "axios"
import { Image, Transformation } from 'cloudinary-react';

export default function Detail() {
    const context = React.useContext(UserContext)
    const navigate = useNavigate()
    const {id} = useParams()
    const [post, setPost] = React.useState({})

    React.useEffect(()=> {
      Axios.get(`http://localhost:3001/posts/${id}`)
        .then(res => setPost(res.data[0]))
    },[])

    return (
        <div className='detail'>
            {!context.username ? navigate("/login") : 
                <div className="postBox">
                    <h2>{post.title}</h2>
                    <p>author: {post.author}</p>
                    <p>{post.description}</p> 
                    <Image cloudName="drga36mnw" publicId={post.image}>     
                        <Transformation crop="scale" width="800" />
                    </Image>
                </div>
            }
        </div>
    )
}
