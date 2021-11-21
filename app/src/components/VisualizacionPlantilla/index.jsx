import { useState, useEffect } from "react"
import axios from 'axios'
import { Alert } from "@mui/material"
import styled from 'styled-components'

const plantillas_endpoint = 'http://localhost:3080/render-plantilla'

const CvContainer = styled.article`
    max-width: 1000px;
    margin: auto;
`

function VisualizacionPlantilla ( {id} ) {


    const [template, setTemplate] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {user} = JSON.parse(window.localStorage.getItem('session'))

    useEffect( () => {
        
        axios.get( plantillas_endpoint, {
            params: {
                template_id: id,
                user_id: user
            }
        })
        .then( (response) => {
            setTemplate( response.data.html )
            console.log(response)
            setIsLoading( false )
        })
        .catch(function (error) {
            console.log( error );
        })
        
    }, [])


    if ( isLoading ) {
        return <Alert key="loading-data" severity="info">Cargando tu plantilla...</Alert>
    }
    
    return (
        <CvContainer className="cv-content" data-react-cv={id}>
            <div dangerouslySetInnerHTML={{ __html: template }} />
        </CvContainer>
    )

}

export default VisualizacionPlantilla