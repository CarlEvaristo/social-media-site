import React from 'react'
import "./Login.css"
import Axios from "axios"
import { UserContext } from '../../userContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const context = React.useContext(UserContext)
  const [user, setUser] = React.useState({})
  const [errorMsg, setErrorMsg] = React.useState("")
  const [loginMsg, setLoginMsg] = React.useState("Please Sign-in")
  const navigate = useNavigate()

  React.useEffect(()=>{
    !context.username ? setLoginMsg("Please Sign-in") :
    setLoginMsg(`User is logged in: ${context.username}`)
  },[context.username])

  function handleChange(event) {
    const {name,value} = event.target
    setUser(prevData => ({...prevData, [name]:value}))
  }

  function handleLogin(e){
    e.preventDefault()
    Axios.post("http://localhost:3001/user/login", user)
    .then(res => {
      if (res.data.length > 0) {
        if (res.data[0].password === user.password) {
          context.userSetter(user)
          setUser({})
          navigate("/")
        } else {
          setErrorMsg("Invalid password...")
        }
      } else {
        setErrorMsg("User unknown...")
      }
    })
  }

  function handleLogout(){
    context.logoutHandler()
    setErrorMsg("")
    setUser({})
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      {!context.username ? 
        <>
          <form className="loginForm" onSubmit={handleLogin}>
            <input name="username" onChange={handleChange} type="text" placeholder='Username...' minLength="6" required={true} />  
            <input name="password" onChange={handleChange} type="password" placeholder='Password...' minLength="6" required={true} />
            <button>Login</button>
          </form>
          <h3 style={{color:"red"}}>{errorMsg}</h3>
        </>
        :
        <>
          <h3>{loginMsg}</h3>
          <button onClick={handleLogout}>Logout</button>
        </>
      }
    </div>
  )
}
