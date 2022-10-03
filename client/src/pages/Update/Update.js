import React from 'react'
import "./Update.css"
import { UserContext } from '../../userContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Axios from "axios"
import { Image, Transformation } from 'cloudinary-react';
import ScrollTop from '../../hooks/useScrollTop'
import NavAdmin from '../../components/NavAdmin/NavAdmin'


export default function Edit() {
    const {id} = useParams()
    const [post, setPost] = React.useState({})
    const [image, setImage] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const navigate = useNavigate()
    
    React.useEffect(()=> {
        ScrollTop()
        Axios.get(`http://localhost:3001/posts/${id}`)
            .then(res => {

                setPost(res.data[0])
            })
    },[])
    
    function handleChange(event){
        const {name,value} = event.target
        setPost(prevData => ({...prevData, [name]:value}))
    }

    function upDate() {
        setLoading(true)
        const cloudinaryURL = 'https://api.cloudinary.com/v1_1/drga36mnw/image/upload'  //drga36mnw IS MY CLOUDINARY ID 
        const formData = new FormData()
        image.length && formData.append("file", image[0])   // check if there is a new image
        formData.append("upload_preset", "hyq9vsty")        // THIS HAS TO BE UNSIGNED, SEE UPLOAD SETTINGS: https://cloudinary.com/console/c-21d0464ac083e424de664a3d1c2e9e/settings/upload
        
        image.length !== 0 ?            // check if there is a new image (otherwise no cloudinary request and use previous image cloudinary id)
        Axios.post(cloudinaryURL, formData)                                          // SAVE IMAGE FILENAME TO CLOUDINARY STORAGE   
            .then(function(response) {
                console.log("CLOUDINARY RESPONSE: ", response.data.public_id)        // GET ID OF CLOUDINARY IMAGE FILENAME AND SAVE TO POST STATE
                Axios.put("http://localhost:3001/update", {                         // SEND POST TO BACKEND   
                    ...post, 
                    image:response.data.public_id
                })                        
                    .then(response => {
                        console.log(response)
                        setLoading(false)
                        navigate("/profile")
                })    
            })
            .catch(function(error) {
                console.log("Cloudinary error: ", error)
            })
        :
        Axios.put("http://localhost:3001/update", {...post})     //(post keeps original image/date)      
        .then(response => {
            console.log(response)
            setLoading(false)
            navigate("/profile")
    })    
    }
    
    return (
        <div className='edit'>  
            <h1>Edit Post</h1>
            {loading ? <img src="/images/loader.gif" style={{width:"50px"}} alt="loader"/> :
                <>
                <form className="editForm" onSubmit={upDate} > 
                    <input className="editInput" name="title" value={post.title} onChange={handleChange} type="text" placeholder='Title...' required={true} />
                    <textarea className="editInput description" name="description" value={post.description} onChange={handleChange} type="text" placeholder='Description...' required={true} />
                    <div className="imgInputWrapper">
                        <Image cloudName="drga36mnw" publicId={post.image}>     
                            <Transformation crop="scale" width="400" />
                        </Image>
                        <p>Optional: Choose a new Image <input className="editInput" type="file" onChange={(e) => setImage(e.target.files)} /></p>
                    </div>
                    <button className="editBtn" >Edit Post</button>
                </form> 
                <NavAdmin />
                </>
            }
        </div>
    )

    // return (
    //     <div className='detail'>
    //         <div className="postDetail">
    //             <div className='detailHeader'> 
    //                 <h2>{post.title}</h2>
    //                 <Like postid={id} />
    //             </div>
    //             <div className='subtext'> 
    //                 <p>author: {post.author}</p>
    //                 <Link to="/"><i className="fa-solid fa-circle-left"></i>   back to all posts</Link>
    //             </div>
    //             <p className='postText'>{post.description}</p> 
    //             <Image cloudName="drga36mnw" publicId={post.image}>     
    //                 <Transformation crop="scale" width="800" />
    //             </Image>
    //         </div>
    //     </div>
    // )
}
