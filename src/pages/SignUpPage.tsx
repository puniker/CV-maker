import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import {Grid, TextField, Button, Container, Alert, FormControl, Typography, Link} from '@mui/material'
import {Send} from '@mui/icons-material';
import FormElements from "../components/FormElements"
import UserContext from '../Context/UserContext'
import ThemeContext from '../Context/ThemeContext'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { createFirebaseUser } from '../services/firebaseAuthService'
import {NavLink} from 'react-router-dom'
import { passwordMatch } from "../services/formValidations";

const FormWrapper = styled.section`
  max-width: 500px;
  margin:  auto;
  padding: 20px 40px;
  border: 1px solid lightgrey;
`
const PageWrapper = styled.div`
  padding-top: 100px;
`
export default ( ) => {

    const [isLoading, setIsLoading] = useState(false)
    const [loginError, setLoginError] = useState<any>()
    const [showMsg, setShowMsg] = useState(false)


    const submit = ( evt: any ) =>{

        evt.preventDefault
        setIsLoading( true )
        if ( passwordMatch(evt.password, evt.repeat_password) ) {
          createFirebaseUser(evt.username, evt.password)
            .then(function (response: any) {
              console.log('Acceso permitido. Bienvenido a la App.', response)
            })
            .catch(function (error) {
              console.error(error);
              console.log('Error de acceso a la App.')
              setLoginError(error)
              setShowMsg(true)
              setTimeout(()=>{ setShowMsg(false) }, 3000)
            })
        } else {
          setLoginError('Las contraseñas no coinciden')
          setShowMsg(true)
          setTimeout(()=>{ setShowMsg(false) }, 3000)
        }

    }

    // const theme = useTheme();
    // const colorMode = useContext(ThemeContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <PageWrapper>
            <Container>
              <FormWrapper>
                <Typography variant='h5' textAlign={'center'}>¡Regístrate y empieza a crear tu CV!</Typography>
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
                      <FormElements.Input 
                          type='password'
                          register={register}
                          label="Repite la contraseña"  
                          name='repeat_password'
                      />
                    </Grid>
                    <Grid item xs={4} paddingY="20px">
                      <Button type="submit" variant="contained" >
                        Registrarse
                        <Send />
                      </Button>
                    </Grid>

                    <Grid item xs={12}>
                      { ( showMsg ) ? <Alert key="error-msg" severity="error">{loginError}</Alert> : '' }
                    </Grid>
                  </Grid>
                  
                </form>
                <Typography textAlign="center" paddingY='20px' >¿Ya tienes cuenta? <NavLink to="/login"><Link>Inicia sesión.</Link></NavLink></Typography>
              </FormWrapper>
            </Container>
        </PageWrapper>
    )
}