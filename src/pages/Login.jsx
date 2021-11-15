import { useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import {FloatingLabel, Form, Col, Row, Container, Alert} from 'react-bootstrap'
import styled from "styled-components"

const FormWrapper = styled.section`
  max-width: 500px;
  margin:  50px auto;
  padding: 20px 40px;
  border: 1px solid lightgrey;
`
export default ( {setIsLogged} ) => {

    const endpoint = 'http://localhost:3080/login'
    const [isLoading, setIsLoading] = useState(false)
    const [loginError, setLoginError] = useState()
    const [showMsg, setShowMsg] = useState(false)

    const submit = ( evt ) =>{
        evt.preventDefault
        setIsLoading( true )

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
            <Container>
              <FormWrapper>
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
                  <button className="p_button">Acceder</button>
                  <Alert key="error-msg" variant="danger" show={showMsg}>
                      {loginError}
                  </Alert>
                </form>
              </FormWrapper>
            </Container>
        </>
    )
}