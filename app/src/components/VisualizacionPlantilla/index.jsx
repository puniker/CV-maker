import { useContext, useState, useEffect, useRef } from "react"
import axios from 'axios'
import { Alert } from "@mui/material"
import styled from 'styled-components'
import UserContext from '../../Context/UserContext'

const plantillas_endpoint = 'http://localhost:3080/api/render-plantilla'

const CvContainer = styled.article`
    max-width: 1000px;
    margin: 0px auto 100px auto;
`

function VisualizacionPlantilla ( {template_id} ) {

    const iframeRef = useRef()
    const [iframeHeight, setIframeHeight] = useState()
    const [template, setTemplate] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const user = useContext(UserContext)

    useEffect( () => {
        
        axios.get( plantillas_endpoint, {
            params: {
                template_id: template_id,
                user_id: user.id
            }
        })
        .then( (response) => {
            setTemplate( response.data.html )
            //console.log(response)
            setIsLoading( false )
        })
        .catch(function (error) {
            console.log( error );
        })
        
    }, [])

    const onLoad = () => {
        console.log( iframeRef.current)
        setIframeHeight(`${iframeRef.current.scrollWidth}px`)
    }

    if ( isLoading ) {
        return <Alert key="loading-data" severity="info">Cargando tu plantilla...</Alert>
    }
    
    return (
        <CvContainer className="cv-content" data-react-cv={template_id}>            
            <iframe 
                ref={iframeRef}
                srcdoc={template}
                //style={{ width: '1px', minWidth: '100%'}}
                width="100%"
                height={iframeHeight}
                onLoad={ onLoad }
            />

        </CvContainer>
    )

}

export default VisualizacionPlantilla