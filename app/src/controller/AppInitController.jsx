import {useContext} from 'react'
import UserContext from '../Context/UserContext'

export function SetInitialContext () {

    const {setUserId, setUserName, setIsAdmin} = useContext(UserContext)
    if (window.localStorage.user) { 
        const userLocalStorage = JSON.parse( window.localStorage.user )
        setUserId( userLocalStorage.id )
        setUserName( userLocalStorage.username )
    }

}