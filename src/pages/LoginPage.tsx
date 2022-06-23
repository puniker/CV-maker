import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import {Grid, TextField, Button, Container, Alert, FormControl, useTheme, Link, Typography} from '@mui/material'
import {Send} from '@mui/icons-material';
import FormElements from "../components/FormElements"
import UserContext from '../Context/UserContext'
import ThemeContext from '../Context/ThemeContext'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { loginFirebase } from '../services/firebaseAuthService'
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
          .then(function (response: UserCredential ) {
            console.log('Acceso permitido. Bienvenido a la App.', response.user.displayName)
            setUserId(response.user.uid)
            setUserName(response.user.email)
            setIsAdmin(true)
            window.localStorage.setItem('user', JSON.stringify( {"id": response.user.uid, "username": response.user.email, "is_admin": true} ))
          })
          .catch(function (error) {
            setLoginError(error)
            setShowMsg(true)
            setTimeout(()=>{ setShowMsg(false) }, 3000)
          })

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
                
                <Grid item xs={12}>
                  <ThemeSwitcher />
                </Grid>
              </FormWrapper>
            </Container>
        </PageWrapper>
    )
}