import React from 'react'
import "./Upload.css"
import Axios from "axios"
import { UserContext } from '../../userContext'
import { useNavigate } from 'react-router-dom'

export default function Upload() {
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [image, setImage] = React.useState([])

  const context = React.useContext(UserContext)
  const [errorMsg, setErrorMsg] = React.useState("")
  const navigate = useNavigate()
  
  function handleChange(event){
    // const {name,value} = event.target
    // setUser(prevData => ({...prevData, [name]:value}))
  }
  function handleClick(event){
    event.preventDefault()
    // Axios.post("http://localhost:3001/user/register", user)
    //   .then(res => {
    //     if (res.data.insertId) {  //check if response has an id => indicates it was successful
    //       context.userSetter(user)
    //       setUser({})
    //       navigate('/ ')	
    //     } else {
    //       setErrorMsg("Username already taken.")
    //     }
    //   })
  }

  return (
    <div className='upload'>
      <h1>Create a post</h1>
      <form className="uploadForm" onSubmit={handleClick}>
        <input name="title" onChange={handleChange} type="text" placeholder='Title...' required={true} />
        <input name="description" onChange={handleChange} type="text" placeholder='Description...' required={true} />
        <input type="file" />
        <button>Upload</button>
      </form>
      <h3 style={{color:"red"}}>{errorMsg}</h3>
    </div>
  )
}
