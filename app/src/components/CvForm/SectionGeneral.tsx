import React, { useEffect, useState, useContext } from 'react'
import FormElements from '../FormElements'
import { useForm } from "react-hook-form"
import {Grid, Alert, Button, Snackbar} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import UserContext from '../../Context/UserContext'
// import CvService from '../../services/CvService'
import { getGeneral, updateGeneralData } from '../../services/firestoreDatabaseService';
import { UserGeneralDataModel } from '../../models/UserGeneralDataModel'

function SectionGeneral (  ) {
    
    const {userId} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<UserGeneralDataModel>()
    const [showMsg, setShowMsg] = useState(false)

    useEffect( () => {
        getGeneral(userId).then((response: UserGeneralDataModel) => {
            console.log('resolve', response);
            setData( response )
            setIsLoading(false)
        });
    }, [])
    
    const onSubmit = ( evt: any ) => {
        evt.preventDefault
        console.log( evt )
        updateGeneralData(userId, evt)
            .then(response => {
                console.log(response);
                setData(evt)
                setShowMsg(true)
                setTimeout(()=>{ setShowMsg(false) }, 3000)
            });
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
                        {/* <Grid item xs={12}>
                            <FormElements.File 
                                register={register}
                                label="Imagen de perfil"  
                                name='imagen_perfil'
                            />
                        </Grid> */}
                        <Grid item xs={6}>
                                <FormElements.Input 
                                    type='text'
                                    register={register}
                                    label="Nombre"  
                                    name='name'
                                    defaultValue={ data?.name }
                                />
                        </Grid>
                        <Grid item xs={6}>
                                <FormElements.Input 
                                    type='text'
                                    register={register}
                                    label="Apellidos"
                                    name='surname'
                                    defaultValue={data?.surname}
                                />
                        </Grid>
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Email de contacto"  
                                name='email'
                                defaultValue={data?.email}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Teléfono"  
                                name='telefono'
                                defaultValue={data?.telefono}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Direccion"  
                                name='direccion'
                                defaultValue={data?.direccion}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='date'
                                register={register}
                                label="Fecha de nacimiento"  
                                name='birth_date'
                                defaultValue={data?.birth_date}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Lugar de nacimiento"  
                                name='place_of_birth'
                                defaultValue={data?.place_of_birth}
                            />
                        </Grid>
                        
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='number'
                                register={register}
                                label="Código postal"  
                                name='c_postal'
                                required="required"
                                defaultValue={data?.c_postal}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Ciudad/Pueblo"  
                                name='city'
                                defaultValue={data?.city}
                            />
                        </Grid>
                        
                        <Grid item xs={4}>
                            <FormElements.Select
                                register={register}
                                label="Género"  
                                name='gender'
                                defaultValue={data?.gender}
                                options={['Masculino', 'Femenino']}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Nacionalidad"  
                                name='nationality'
                                defaultValue={data?.nationality}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Estado civil"  
                                name='estado_civil'
                                defaultValue={data?.estado_civil}
                            />
                        </Grid>
                        
                        <Grid item xs={4}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Sitio Web"  
                                name='website'
                                defaultValue={data?.website}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="LinkedIn"  
                                name='linkedIn'
                                defaultValue={data?.linkedIn}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Twitter"  
                                name='twitter'
                                defaultValue={data?.twitter}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormElements.Input 
                                type='text'
                                register={register}
                                label="Texto Descriptivo"  
                                name='description'
                                defaultValue={data?.description}
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
