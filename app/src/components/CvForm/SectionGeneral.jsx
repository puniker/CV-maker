import React, { useEffect, useState, useContext } from 'react'
import FormElements from '../FormElements'
import { useForm } from "react-hook-form"
import {Grid, Alert, Button, Snackbar} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import UserContext from '../../Context/UserContext'
import CvService from '../../services/CvService'
import { getGeneral } from '../../services/firestoreDatabaseService';

function SectionGeneral (  ) {
    
    const {userId} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [showMsg, setShowMsg] = useState(false)

    useEffect( () => {
        // getGeneral(userId).then((response) => {
        //     console.log('resolve', response);
        // });
        // debugger;
        CvService.GetGeneralData(userId)
        .then( (response) => {
            setData( response.data )
            setIsLoading(false)
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }, [])
    
    const onSubmit = ( evt ) => {
        evt.preventDefault
        //console.log( evt )

        CvService.SaveGeneralData(evt, userId)
        .then(function (response) {
            console.log(response);
            if ( response.status = 200 ) {
                setData(evt)
                setShowMsg(true)
                setTimeout(()=>{ setShowMsg(false) }, 3000)
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed    code ...
        })
    }
    
    const handleCloseAlert = () => {
        setShowMsg( false )
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    if ( isLoading ) {
        return <Alert key="loading-data" severity="info" >Cargando tus datos...</Alert>
    }

    return (
        <>
            <Snackbar open={showMsg} autoHideDuration={6000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                    Se han guardado tu datos
                </Alert>
            </Snackbar>

            <form onSubmit={handleSubmit(onSubmit)} >
                <section className="form-general">
                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <FormElements.File 
                                register={register}
                                label="Imagen de perfil"  
                                name='imagen_perfil'
                            />
                        </Grid>
                        <Grid item xs={6}>
                                <FormElements.Input 
                                    type='text'
                                    register={register}
                                    label="Nombre"  
                                    name='nombre'
                                    defaultValue={ data.nombre }
                                />
                        </Grid>
                        <Grid item xs={6}>
                                <FormElements.Input 
                                    type='text'
                                    register={register}
                                    label="Apellidos"
                                    name='apellido'
                                    defaultValue={data.apellido}
                                />
                        </Grid>
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Email de contacto"  
                                name='email'
                                defaultValue={data.email}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Teléfono"  
                                name='telefono'
                                defaultValue={data.telefono}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Direccion"  
                                name='direccion'
                                defaultValue={data.direccion}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='date'
                                register={register}
                                label="Fecha de nacimiento"  
                                name='fecha_nacimiento'
                                defaultValue={data.fecha_nacimiento}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Lugar de nacimiento"  
                                name='lugar_nacimiento'
                                defaultValue={data.lugar_nacimiento}
                            />
                        </Grid>
                        
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='number'
                                register={register}
                                label="Código postal"  
                                name='c_postal'
                                required="required"
                                defaultValue={data.c_postal}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Ciudad/Pueblo"  
                                name='ciudad_pueblo'
                                defaultValue={data.ciudad_pueblo}
                            />
                        </Grid>
                        
                        <Grid item xs={4}>
                            <FormElements.Select
                                register={register}
                                label="Género"  
                                name='genero'
                                defaultValue={data.genero}
                                options={['Masculino', 'Femenino']}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Nacionalidad"  
                                name='nacionalidad'
                                defaultValue={data.nacionalidad}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Estado civil"  
                                name='estado_civil'
                                defaultValue={data.estado_civil}
                            />
                        </Grid>
                        
                        <Grid item xs={4}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Sitio Web"  
                                name='sitio_web'
                                defaultValue={data.sitio_web}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="LinkedIn"  
                                name='linkedin'
                                defaultValue={data.linkedin}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Twitter"  
                                name='twitter'
                                defaultValue={data.twitter}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Texto Descriptivo"  
                                name='texto_descriptivo'
                                defaultValue={data.texto_descriptivo}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Button variant="contained" color="success" type="submit" startIcon={<SaveIcon />}>Guardar datos</Button>
                        </Grid>
                    </Grid>


                </section>
            </form>
        </>
    )
}

export default SectionGeneral
