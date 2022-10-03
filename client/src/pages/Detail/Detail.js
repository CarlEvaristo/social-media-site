import React from 'react'
import "./Detail.css"
import { UserContext } from '../../userContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Axios from "axios"
import { Image, Transformation } from 'cloudinary-react';
import ScrollTop from '../../hooks/useScrollTop'
import Like from '../../components/Like/Like'

export default function Detail() {
    const context = React.useContext(UserContext)
    const navigate = useNavigate()
    const {id} = useParams()
    const [post, setPost] = React.useState({})

    React.useEffect(()=> {
        ScrollTop()
        // Axios.get(`http://localhost:3001/posts/${id}`)
        Axios.get(`/posts/${id}`)
            .then(res => setPost(res.data[0]))
    },[])
    

    return (
        <div className='detail'>
            <div className="postDetail">
                <div className='detailHeader'> 
                    <h2>{post.title}</h2>
                    <Like postid={id} />
                </div>
                <div className='subtext'> 
                    <p>author: {post.author}</p>
                    <Link to="/"><i className="fa-solid fa-circle-left"></i>   back to all posts</Link>
                </div>
                <p className='postText'>{post.description}</p> 
                <Image cloudName="drga36mnw" publicId={post.image}>     
                    <Transformation crop="scale" width="800" />
                </Image>
            </div>
        </div>
    )
}
