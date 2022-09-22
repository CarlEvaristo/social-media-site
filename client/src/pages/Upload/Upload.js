import React from 'react'
import "./Upload.css"
import Axios from "axios"
import { UserContext } from '../../userContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Upload() {
  const [post, setPost] = React.useState({
    title:"",
    description:"",
    image:"",
    author:""
  })
  const [image, setImage] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const context = React.useContext(UserContext)
  const navigate = useNavigate()

  function handleChange(event){
    const {name,value} = event.target
    setPost(prevData => ({...prevData, [name]:value}))
  }

  function upload() {
    setLoading(true)
    const cloudinaryURL = 'https://api.cloudinary.com/v1_1/drga36mnw/image/upload'  //drga36mnw IS MY CLOUDINARY ID 

    const formData = new FormData()
    formData.append("file", image[0])
    formData.append("upload_preset", "hyq9vsty") // THIS HAS TO BE UNSIGNED, SEE UPLOAD SETTINGS: https://cloudinary.com/console/c-21d0464ac083e424de664a3d1c2e9e/settings/upload
    
    Axios.post(cloudinaryURL, formData)                                          // SAVE IMAGE FILENAME TO CLOUDINARY STORAGE   
        .then(function(response) {
            console.log("CLOUDINARY RESPONSE: ", response.data.public_id)        // GET ID OF CLOUDINARY IMAGE FILENAME AND SAVE TO POST STATE
            console.log("USER: ", context.username)
            Axios.post("http://localhost:3001/upload", {                         // SEND POST TO BACKEND   
                ...post, 
                image:response.data.public_id,
                author:context.username
            })                        
             .then(response => {
                setLoading(false)
                console.log("BACKEND RESPONSE: ", response)
                navigate("/posts")
            })    
        })
        .catch(function(error) {
            console.log("Cloudinary error: ", error)
        })
  }

  return (
    <div className='upload'>
      <h1>Create a post</h1>
      {loading ? <img src="/images/loader.gif" style={{width:"50px"}} alt="loader"/>
      :
      context.username ? 
        <div className="uploadForm">
            <input name="title" onChange={handleChange} type="text" placeholder='Title...' required={true} />
            <textarea name="description" onChange={handleChange} type="text" placeholder='Description...' required={true} />
            <input type="file" onChange={(e) => setImage(e.target.files)}/>
            <button onClick={upload} >Upload</button>
        </div> 
        :
        <Link to="/login">Please Login First</Link>
      }
    </div>
  )
}
