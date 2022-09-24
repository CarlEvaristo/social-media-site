import React from "react"

const UserContext = React.createContext()

function UserContextProvider(props) {
    const [username, setUsername] = React.useState(
        window.localStorage.getItem("username") ? window.localStorage.getItem("username") : null
    )

    React.useEffect(()=>{
        window.localStorage.getItem("username") &&
            setUsername(window.localStorage.getItem("username")) 
    })

    function userSetter(user) {
        window.localStorage.setItem("username",user.username)
        setUsername(user.username)
    }

    function logoutHandler() {
        window.localStorage.removeItem("username")
        setUsername(null)
    }

    return (
        <UserContext.Provider value={{username, userSetter, logoutHandler}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}