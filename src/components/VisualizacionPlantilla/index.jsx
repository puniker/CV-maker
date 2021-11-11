import { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from 'axios'
import {Alert} from 'react-bootstrap'
const plantillas_endpoint = 'http://localhost:3080/render-plantilla'

function VisualizacionPlantilla ( {id} ) {

    const [template, setTemplate] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        
        axios.get( plantillas_endpoint, {
            params: {
                template_id: id,
                user_id: 1
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
        return <Alert key="loading-data" variant="primary" show="true">Cargando tu plantilla...</Alert>
    }
    
    return (
        <article className="cv-content" data-react-cv={id}>
            <div dangerouslySetInnerHTML={{ __html: template }} />
        </article>
    )

}

export default VisualizacionPlantilla