import axios from "axios"
import { NavLink } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { Alert, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography} from '@mui/material'

export default () => {

    const [templates, setTemplates] = useState()
    const [isLoading, setIsLoading] = useState(true)



    useEffect( () => {
        
        axios.get('http://localhost:3080/api/plantillas')
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
                                    image={template.thumbnail}
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
                                    <Button size="small">Share</Button>
                                    <Button size="small">Usar plantilla</Button>
                                    <NavLink to={`/plantilla/${template.id}`}>Seleccionar</NavLink>
                                </CardActions>
                            </Card>
                        )
                    } )
                }
            </Grid>

        </>
    )
    
}