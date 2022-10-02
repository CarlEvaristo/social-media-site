import React from 'react'
import "./Register.css"
import Axios from "axios"
import { UserContext } from '../../userContext'
import { useNavigate } from 'react-router-dom'
import ScrollTop from '../../hooks/useScrollTop';

export default function Register() {
  const [user, setUser] = React.useState({})
  const context = React.useContext(UserContext)
  const [errorMsg, setErrorMsg] = React.useState("")
  const navigate = useNavigate()
  
  React.useEffect(()=> {
    ScrollTop()
  },[])

  function handleChange(event){
    const {name,value} = event.target
    setUser(prevData => ({...prevData, [name]:value}))
  }
  function handleClick(event){
    event.preventDefault()
    Axios.post("/user/register", user)
      .then(res => {
        if (res.data.insertId) {  //check if response has an id => indicates it was successful
          context.userSetter(user)
          setUser({})
          navigate('/posts')	
        } else {
          setErrorMsg("Username already taken.")
        }
      })
  }

  return (
    <div className='register'>
      <h1>Registration</h1>
      <form className="registerForm" onSubmit={handleClick}>
        <input className="registerInput" name="username" onChange={handleChange} type="text" placeholder='Username...' minLength="3" required={true} />
        <input className="registerInput" name="password" onChange={handleChange} type="password" placeholder='Password...' minLength="5" required={true} />
        <button className="registerBtn">Register</button>
      </form>
      <h3 style={{color:"red"}}>{errorMsg}</h3>
    </div>
  )
}
