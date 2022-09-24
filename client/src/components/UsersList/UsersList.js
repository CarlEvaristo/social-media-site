import React from 'react'
import "./UsersList.css"
import Axios from 'axios'

export default function Users({setFilter}) {
  const [users, setUsers] = React.useState([])

  React.useEffect(()=> {
    Axios.get("http://localhost:3001/user/users")
    .then(res => setUsers(res.data))
  },[])

  const userElements = users.map(user => {
    return <div key={user.id} onClick={()=>setFilter(user.username)}>{user.username}</div>
  })

  return userElements
}
