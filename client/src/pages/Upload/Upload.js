import React from 'react'
import "./Upload.css"
import Axios from "axios"
import { UserContext } from '../../userContext'
import { useNavigate, Link } from 'react-router-dom'
import ScrollTop from '../../hooks/useScrollTop';
import NavAdmin from '../../components/NavAdmin/NavAdmin'

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

  React.useEffect(()=> {
    ScrollTop()
  },[])
  
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
            const newDate = new Date()
            console.log(newDate)
            // Axios.post("http://localhost:3001/upload", {                         // SEND POST TO BACKEND   
            Axios.post("/upload", {                         // SEND POST TO BACKEND   
                ...post, 
                image:response.data.public_id,
                author:context.username,
                date: newDate
            })                        
             .then(response => {
                setLoading(false)
                console.log("BACKEND RESPONSE: ", response)
                navigate("/profile")
            })    
        })
        .catch(function(error) {
            console.log("Cloudinary error: ", error)
        })
  }

  return (
    <>
      {!context.username ? navigate("/login") : 
        <div className='upload'>
          <h1>Create a post</h1>
          {loading ? <img src="/images/loader.gif" style={{width:"50px"}} alt="loader"/>
          :
          <>
            <form className="uploadForm" onSubmit={upload}>
                <input className="upLoadInput" name="title" onChange={handleChange} type="text" placeholder='Title...' required={true} />
                <textarea className="upLoadInput" name="description" onChange={handleChange} type="text" placeholder='Description...' required={true} />
                <input className="upLoadInput" type="file" onChange={(e) => setImage(e.target.files)} required={true} />
                <button className="upLoadBtn" >Upload</button>
            </form> 
            <NavAdmin />
          </>
          }
        </div>
      }
    </>
  )
}
