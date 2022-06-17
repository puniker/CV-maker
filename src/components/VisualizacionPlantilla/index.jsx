import { useContext, useState, useEffect, useRef, createRef } from "react"
import axios from 'axios'
import { Alert, Container, Button } from "@mui/material"
import UserContext from '../../Context/UserContext'
import {PictureAsPdf as PictureAsPdfIcon} from '@mui/icons-material'

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

    

    //if ( isLoading ) {
    //    return <Alert key="loading-data" severity="info">Cargando tu plantilla...</Alert>
    //}
    
    return (
        <>
            <Button color="secondary">Descargar PDF <PictureAsPdfIcon /></Button>
            <div >
                <h4>Aquí iría la plantilla</h4>

            </div>
        </>

    )

}

export default VisualizacionPlantilla