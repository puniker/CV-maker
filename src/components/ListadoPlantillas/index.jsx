import { NavLink } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { Alert, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography} from '@mui/material'
import {GetAllTemplatesService} from '../../services/PlantillasService'
import PlantillaImage from '../../assets/images/logotipo.jpg'

export default () => {

    const [templates, setTemplates] = useState()
    const [isLoading, setIsLoading] = useState(true)



    useEffect( () => {
        
        GetAllTemplatesService()
        .then( ( response ) => {
            setTemplates( response.data )
            setIsLoading(false)
        })
        .catch( ( error ) => {
            console.log( error )
        })
        
    }, [])
        
    if ( isLoading ) {
        return <Alert key="loading-data" severity="info">Cargando plantillas...</Alert>
    }

    return (
        <>
            <Grid container spacing={1}>
                {
                    templates.map( (template) => {
                        return(
                            <Card sx={{ width: '33%' }}  key={`template_card_${Math.random()}`}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={PlantillaImage}
                                    alt={template.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {template.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {template.autor}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <NavLink to={`/plantilla/${template.id}`}><Button size="small">Usar plantilla</Button></NavLink>
                                </CardActions>
                            </Card>
                        )
                    } )
                }
            </Grid>

        </>
    )
    
}