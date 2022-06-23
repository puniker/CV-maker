import UserContext from '../Context/UserContext'
import {useContext} from 'react'
import { Redirect } from 'react-router-dom'
import { firebaseAuthSignOut } from '../services/firebaseAuthService'

export function logout () {
    firebaseAuthSignOut().then(response => {
        console.log(response);
    })
}

