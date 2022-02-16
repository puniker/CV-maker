import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import {Grid, TextField, Button, Container, Alert, FormControl} from '@mui/material'
import {Send} from '@mui/icons-material';
import FormElements from "../components/FormElements"
import UserContext from '../Context/UserContext'
import ThemeSwitcher from '../components/ThemeSwitcher'
import {UserLoginService} from '../services/UserService'

const FormWrapper = styled.section`
  max-width: 500px;
  margin:  50px auto;
  padding: 20px 40px;
  border: 1px solid lightgrey;
`
export default ( {setIsLogged, setSession} ) => {

    const [isLoading, setIsLoading] = useState(false)
    const [loginError, setLoginError] = useState()
    const [showMsg, setShowMsg] = useState(false)

    const {setUserId, setUserName, setIsAdmin} = useContext(UserContext)

    const submit = ( evt ) =>{

        evt.preventDefault
        setIsLoading( true )

          UserLoginService(evt.username, evt.password)
          .then(function (response) {

            const loginResponse = response.data
            if( loginResponse.success == true ) {
                console.log('Acceso permitido. Bienvenido a la App.')
                setUserId(loginResponse.data.id)
                setUserName(loginResponse.data.username)
                setIsAdmin(true)
                setLoginError(loginResponse.message)
                console.log(loginResponse)                
                window.localStorage.setItem('user', JSON.stringify( {"id": loginResponse.data.id, "username": loginResponse.data.username, "is_admin": loginResponse.data.is_admin} ))
            } else {
                console.log('Error de acceso a la App.')
                setLoginError(loginResponse.message)
                setShowMsg(true)
                setTimeout(()=>{ setShowMsg(false) }, 3000)
            }

          })
          .catch(function (error) {
            console.log(error);
          })

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
                <Grid item xs={12}>
                  <ThemeSwitcher />
                </Grid>
              </FormWrapper>
            </Container>
        </>
    )
}