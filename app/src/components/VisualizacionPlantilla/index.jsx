import { useContext, useState, useEffect, useRef, createRef } from "react"
import axios from 'axios'
import { Alert, Container, Button } from "@mui/material"
import UserContext from '../../Context/UserContext'
import {PictureAsPdf as PictureAsPdfIcon} from '@mui/icons-material'
import { jsPDF } from "jspdf"
import FileController from '../../controller/FileController'

const plantillas_endpoint = `${import.meta.env.VITE_API_URL}/api/render-plantilla`

function VisualizacionPlantilla ( {template_id, referencia} ) {

    const iframeRef = useRef()
    const ref = createRef(null)
    const [iframeHeight, setIframeHeight] = useState('2000px')
    const [template, setTemplate] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {userId} = useContext(UserContext)

    useEffect( () => {
        
        axios.get( plantillas_endpoint, {
            params: {
                template_id: template_id,
                user_id: userId
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
        setIframeHeight(`${iframeRef.current.scrollWidth}px`)
    }

    

    if ( isLoading ) {
        return <Alert key="loading-data" severity="info">Cargando tu plantilla...</Alert>
    }
    
    return (
        <>
            <Container>
            <Button color="secondary">Generar PDF <PictureAsPdfIcon /></Button>
            </Container>
            <div ref={ref} id="iker">
                <iframe 
                    ref={iframeRef}
                    srcDoc={template}
                    //style={{ width: '1px', minWidth: '100%'}}
                    width="1000px"
                    height="1600px"
                    onLoad={ onLoad }
                />

            </div>
        </>

    )

}

export default VisualizacionPlantilla