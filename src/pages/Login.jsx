import { useState } from "react"
import axios from "axios"

export default ( {setIsLogged, setUserId} ) => {

    const endpoint = 'http://localhost:3080/login'
    const [username, setUsername] = useState('puniker')
    const [password, setPassword] = useState('admin')
    const [loginError, setLoginError] = useState()

    const submit = ( evt ) =>{
        evt.preventDefault()

        axios.get(endpoint, {
            params: {
              username: username,
              password: password
            }
          })
          .then(function (response) {
            //console.log(response);
            var loginResponse = response.data
            //console.log(loginResponse)
            if( loginResponse.access == true ) {
                console.log('Acceso permitido. Bienvenido a la App.')
                setIsLogged(true)
                setUserId(loginResponse.userData.userId)
                localStorage.setItem('session', JSON.stringify( {"logged_in" : true, "userID":loginResponse.userData.userId} ) )
            } else {
                console.log('Error de acceso a la App.')
                setLoginError(loginResponse.error)
                localStorage.setItem('session', JSON.stringify( {"logged_in" : false} ) )
            }

          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
    }

    return (
        <>
            <h1>Login Page</h1>
            <form>
                <input type="text" name="username" value={username} placeholder="usuario" onChange={ (e)=>setUsername(e.target.value) } />
                <input type="password" name="password" value={password} placeholder="contraseña" onChange={ (e)=>setPassword(e.target.value) } />
                <span>{loginError}</span>
                <button onClick={submit}>Log in</button>
            </form>
        </>
    )
}