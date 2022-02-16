import UserContext from '../Context/UserContext'
import {useContext} from 'react'
import { Redirect } from 'react-router-dom'

export function Login (loginResponse, setLoginError) {
    
    const {setUserId, setUserName, setIsAdmin} = useContext(UserContext)
    console.log('assa')
    if( loginResponse.success === true ) {
        console.log('Acceso permitido. Bienvenido a la App.')
        setUserId(loginResponse.data.id)
        setUserName(loginResponse.data.username)
        setIsAdmin(loginResponse.data.isAdmin)
        setLoginError(loginResponse.message)
        window.localStorage.setItem('user', JSON.stringify( {"id": loginResponse.data.id, "is_admin": loginResponse.data.is_admin} ))
        return true
    } else {
        console.log('Error de acceso a la App.')
        setLoginError(loginResponse.message)
        setShowMsg(true)
        setTimeout(()=>{ setShowMsg(false) }, 3000)
        return false
    }

}

export function Logout (setUserId) {
    //const {setUserId, setUserName, setIsAdmin} = useContext(UserContext)
    window.localStorage.removeItem('user')
    //setUserId('')
}

