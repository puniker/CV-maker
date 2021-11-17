import axios from "axios"
import { NavLink } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import {Alert, Card, CardGroup, Container} from 'react-bootstrap'

export default () => {

    const [templates, setTemplates] = useState()
    const [isLoading, setIsLoading] = useState(true)



    useEffect( () => {
        
        axios.get('http://localhost:3080/plantillas')
        .then( ( response ) => {
            setTemplates( response.data )
            setIsLoading(false)
        })
        .catch( ( error ) => {
            console.log( error )
        })
        
    }, [])
        
    if ( isLoading ) {
        return <Alert key="loading-data" variant="primary" show="true">Cargando plantillas...</Alert>
    }

    return (
        <>
        <Container>
            <CardGroup>
                {
                    templates.map( (template) => {
                        return(
                            <Card key={Math.random()}>
                                <Card.Img variant="top" src={template.screenshot} />
                                <Card.Body>
                                    <Card.Title>{template.name}</Card.Title>
                                    <Card.Text>
                                        
                                        <NavLink to={`/plantilla/${template.id}`}>Seleccionar</NavLink>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{template.autor}</small>
                                </Card.Footer>
                            </Card>
                        )
                    } )
                }
            </CardGroup>
        </Container>
        </>
    )
    
}