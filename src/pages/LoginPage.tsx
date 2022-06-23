import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import {Grid, TextField, Button, Container, Alert, FormControl, useTheme, Link, Typography} from '@mui/material'
import {Send} from '@mui/icons-material';
import FormElements from "../components/FormElements"
import UserContext from '../Context/UserContext'
import ThemeContext from '../Context/ThemeContext'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { authWithGoogle, loginFirebase } from '../services/firebaseAuthService'
import {NavLink} from 'react-router-dom'
import { UserCredential } from "firebase/auth";

const FormWrapper = styled.section`
  max-width: 500px;
  margin: auto;
  padding: 20px 40px;
  border: 1px solid lightgrey;
`

const PageWrapper = styled.div`
  padding-top: 100px;
`

export default ( ) => {

    const [isLoading, setIsLoading] = useState(false)
    const [loginError, setLoginError] = useState<string>()
    const [showMsg, setShowMsg] = useState<boolean>(false)

    const {setUserId, setUserName, setIsAdmin} = useContext<any>(UserContext)

    const submit = ( evt: any ) =>{
      evt.preventDefault
      setIsLoading( true )
      loginFirebase(evt.username, evt.password)
        .then((response: UserCredential ) => {
          setLogin(response, evt.mantener_sesion);
        })
        .catch((error: string) => {
          setLoginError(error)
          setShowMsg(true)
          setTimeout(()=>{ setShowMsg(false) }, 3000)
        })
    }

    const googleSignIn = () => {
      authWithGoogle()
        .then((response: UserCredential) => {
          setLogin(response)
        })
        .catch((error: string) => {
          setLoginError(error)
          setShowMsg(true)
          setTimeout(()=>{ setShowMsg(false) }, 3000)
        })
    }

    const setLogin = (userData: UserCredential, mantenerSesion: boolean = true) => {
      console.log('Acceso permitido. Bienvenido a la App.', userData)
      setUserId(userData.user.uid)
      setUserName(userData.user.email)
      setIsAdmin(false)
      if(mantenerSesion) {
        window.localStorage.setItem('user', JSON.stringify( {"id": userData.user.uid, "username": userData.user.email, "is_admin": false} ))
      }
    }

    // const theme = useTheme();
    // const colorMode = useContext(ThemeContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <PageWrapper>
            <Container>
              <FormWrapper>
                <form onSubmit={handleSubmit(submit)} >
                  <Grid container spacing={1}>
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
                      { ( showMsg ) ? <Alert key="error-msg" severity="error">{loginError}</Alert> : '' }
                    </Grid>
                  </Grid>
                  
                </form>
                <Typography textAlign='center' paddingY='20px'>
                  ¿No tienes cuenta? <NavLink to="/registro"><Link>Resgístrate aquí.</Link></NavLink>
                </Typography>
                <Button onClick={googleSignIn} >Registro con Google</Button>
              </FormWrapper>
            </Container>
        </PageWrapper>
    )
}