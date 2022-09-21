import React from 'react'
import "./Register.css"
import Axios from "axios"

export default function Register() {
  const [user, setUser] = React.useState({
    username: "",
    password: ""
  })

  function handleChange(event){
    const {name,value} = event.target
    setUser(prevData => ({...prevData, [name]:value}))
  }
  function handleClick(){
    Axios.post("http://localhost:3001/user/register", user)
      .then(res => console.log(res))
  }

  return (
    <div className='register'>
      <h1>Registration</h1>
      <div className="registerForm">

        <input name="username" onChange={handleChange} type="text" placeholder='Username...'/>
        <input name="password" onChange={handleChange} type="text" placeholder='Password...'/>
        <button onClick={handleClick}>Register</button>

      </div>
    </div>
  )
}
