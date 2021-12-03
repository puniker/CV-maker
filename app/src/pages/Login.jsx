import { useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import {Grid, TextField, Button, Container, Alert, FormControl} from '@mui/material'
import {Send} from '@mui/icons-material';
import FormElements from "../components/FormElements"

const FormWrapper = styled.section`
  max-width: 500px;
  margin:  50px auto;
  padding: 20px 40px;
  border: 1px solid lightgrey;
`
export default ( {setIsLogged, setSession} ) => {

    const endpoint = 'http://localhost:3080/api/login'
    const [isLoading, setIsLoading] = useState(false)
    const [loginError, setLoginError] = useState()
    const [showMsg, setShowMsg] = useState(false)

    const submit = ( evt ) =>{
      console.log( evt )
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
            //console.log(loginResponse)
            if( loginResponse.access == true ) {
                console.log('Acceso permitido. Bienvenido a la App.')
                setLoginError(loginResponse.error)
                //setIsLogged( true )
                setSession( {"logged_in" : true, "user":loginResponse.userData} )
            } else {
                console.log('Error de acceso a la App.')
                setLoginError(loginResponse.error)
                //setIsLogged( false )
                setSession( {"logged_in" : false} )
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
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <FormElements.Input 
                          type='text'
                          register={register}
                          label="Nombre de usuario"  
                          name='username'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormElements.Input 
                          type='password'
                          register={register}
                          label="Contraseña"  
                          name='password'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormElements.Checkbox
                        name="mantener_sesion"
                        label="Mantener sesión iniciada"
                        register={register}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Button type="submit" variant="contained" >
                        Acceder
                        <Send />
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      { ( showMsg ) ? <Alert key="error-msg" severity="error" show={showMsg.toString()}>{loginError}</Alert> : '' }
                    </Grid>
                  </Grid>
                  
                </form>
              </FormWrapper>
            </Container>
        </>
    )
}