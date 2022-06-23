import { onAuthStateChanged } from "firebase/auth"
import React, {useState} from "react"
import { authStateObserver, firebaseAuth, firebaseObserver } from "../services/firebaseInit"

const Context = React.createContext({})

export function UserProvider ({ children }: any) {

    const [isLogged, setIsLogged] = useState<boolean>(false)
    const [userId, setUserId] = useState<string>()
    const [isAdmin, setIsAdmin] = useState<boolean>(false)

    useState(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUserId(user.uid);
                setIsLogged(true)
            } else {
                setIsLogged(false);
            }
            authStateObserver();
        })
        
    })
    return (
        <Context.Provider value={{isLogged, setIsLogged, userId, setUserId, isAdmin, setIsAdmin}} >
            {children}
        </Context.Provider>
    )

}

export default Context