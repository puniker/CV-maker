import { useState } from "react"
import axios from "axios"
import { Imput } from '../components/formulario'
import { useForm } from "react-hook-form"
import {Form, Col, Row, Button, Container, Alert} from 'react-bootstrap';

export default ( {setIsLogged} ) => {

    const endpoint = 'http://localhost:3080/login'
    const [username, setUsername] = useState('puniker')
    const [password, setPassword] = useState('admin')
    const [loginError, setLoginError] = useState()
    const [showMsg, setShowMsg] = useState(false)

    const submit = ( evt ) =>{
        evt.preventDefault

        axios.get(endpoint, {
            params: {
              username: evt.username,
              password: evt.password
            }
          })
          .then(function (response) {
            //console.log(response);
            var loginResponse = response.data
            console.log(loginResponse)
            if( loginResponse.access == true ) {
                console.log('Acceso permitido. Bienvenido a la App.')
                setLoginError(loginResponse.error)
                setIsLogged( true )
                window.localStorage.setItem('session', JSON.stringify( {"logged_in" : true, "user":loginResponse.userData} ) )
            } else {
                console.log('Error de acceso a la App.')
                setLoginError(loginResponse.error)
                setIsLogged( false )
                localStorage.setItem('session', JSON.stringify( {"logged_in" : false} ) )
                setShowMsg(true)
                setTimeout(()=>{ setShowMsg(false) }, 3000)
            }

          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit(submit)} >
              <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Imput 
                        type='text'
                        register={register}
                        label="Nombre de usuario"  
                        name='username'
                        defaultValue={ username }
                        required
                      />
                </Form.Group>
                <Form.Group as={Col}>
                    <Imput 
                        type='text'
                        register={register}
                        label="Constraseña"  
                        name='password'
                        defaultValue={ password }
                        required
                      />
                </Form.Group>
              </Row>
              <button >Log in</button>
              <Alert key="error-msg" variant="danger" show={showMsg}>
                  {loginError}
              </Alert>
            </form>
        </>
    )
}