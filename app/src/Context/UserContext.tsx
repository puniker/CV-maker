import React, {useState} from "react"

const Context = React.createContext({})

export function UserProvider ({ children }: any) {

    const [userId, setUserId] = useState()
    const [userName, setUserName] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    
    return (
        <Context.Provider value={{userId, setUserId, userName, setUserName, isAdmin, setIsAdmin}} >
            {children}
        </Context.Provider>
    )

}

export default Context