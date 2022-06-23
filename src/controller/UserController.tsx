import UserContext from '../Context/UserContext'
import {useContext} from 'react'
import { Redirect } from 'react-router-dom'

export function Logout () {
    //const {setUserId, setUserName, setIsAdmin} = useContext(UserContext)
    window.localStorage.removeItem('user')
    //setUserId('')
}

