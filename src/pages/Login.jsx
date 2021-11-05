import { useState } from "react"
import axios from "axios"
import FormElements from '../components/FormElements'
import { useForm } from "react-hook-form"
import {FloatingLabel, Form, Col, Row, Button, Container, Alert} from 'react-bootstrap';

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
            <Container>

              <form onSubmit={handleSubmit(submit)} >
                <Row className='mb-3'>
                  <Form.Group as={Col}>

                    <FloatingLabel controlId="floatingInput" label="Nombre de usuario" className="mb-3" >
                      <Form.Control 
                        type="text"
                        placeholder="Nombre de usuario"
                        {...register('username')} 
                      />
                    </FloatingLabel>

                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col}>
                        <FloatingLabel controlId="floatingInput" label="Contraseña" className="mb-3" >
                          <Form.Control 
                            type="text"
                            placeholder="Contraseña"
                            {...register('password')} 
                          />
                        </FloatingLabel>
                  </Form.Group>
                </Row>
                <button >Log in</button>
                <Alert key="error-msg" variant="danger" show={showMsg}>
                    {loginError}
                </Alert>
              </form>
            </Container>
        </>
    )
}