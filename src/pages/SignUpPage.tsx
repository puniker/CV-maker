import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import {Grid, TextField, Button, Container, Alert, FormControl, Typography} from '@mui/material'
import {Send} from '@mui/icons-material';
import FormElements from "../components/FormElements"
import UserContext from '../Context/UserContext'
import ThemeContext from '../Context/ThemeContext'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { createFirebaseUser, loginFirebase } from '../services/firebaseAuthService'
import {NavLink} from 'react-router-dom'

const FormWrapper = styled.section`
  max-width: 500px;
  margin:  50px auto;
  padding: 20px 40px;
  border: 1px solid lightgrey;
`
export default ( ) => {

    const [isLoading, setIsLoading] = useState(false)
    const [loginError, setLoginError] = useState()
    const [showMsg, setShowMsg] = useState(false)

    const {setUserId, setUserName, setIsAdmin} = useContext<any>(UserContext)

    const submit = ( evt: any ) =>{

        evt.preventDefault
        setIsLoading( true )

        createFirebaseUser(evt.username, evt.password)
          .then(function (response: any) {
            console.log('Acceso permitido. Bienvenido a la App.', response)
            setUserId(response.user.uid)
            setUserName(response.user.email)
            setIsAdmin(true)
            console.log(response)                
            window.localStorage.setItem('user', JSON.stringify( {"id": response.user.uid, "username": response.user.email, "is_admin": true} ))
          })
          .catch(function (error) {
            console.log(error);
            console.log('Error de acceso a la App.')
            setLoginError(error)
            setShowMsg(true)
            setTimeout(()=>{ setShowMsg(false) }, 3000)
          })

    }

    // const theme = useTheme();
    // const colorMode = useContext(ThemeContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <>
            <Container>
              <FormWrapper>
                <Typography variant='h5' textAlign={'center'}>Resgitrate y empieza a crear tu CV!</Typography>
                <form onSubmit={handleSubmit(submit)} >
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <FormElements.Input 
                          type='text'
                          register={register}
                          label="Nombre"  
                          name='name'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormElements.Input 
                          type='text'
                          register={register}
                          label="Apellidos"  
                          name='surname'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormElements.Input 
                          type='text'
                          register={register}
                          label="Email"  
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
                <NavLink to="/login">
                  <Typography textAlign="center">Inicia sesión con tu cuenta</Typography>
                </NavLink>
                <Grid item xs={12}>
                  <ThemeSwitcher />
                </Grid>
              </FormWrapper>
            </Container>
        </>
    )
}