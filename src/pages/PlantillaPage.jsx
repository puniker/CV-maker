import {useRef} from 'react'
import { useParams } from "react-router"
import VisualizacionPlantilla from "../components/VisualizacionPlantilla"
import {PictureAsPdf as PictureAsPdfIcon} from '@mui/icons-material'
import styled from 'styled-components'
import { Container } from "@mui/material"


const CvContainer = styled.article`
    max-width: 1000px;
    margin: 0px auto 100px auto;
`

function PlantillaPage (  ) {
    
    const { template_id } = useParams()
    const cvRef = useRef()
    const generarPdf = () => {

    }
    console.log(cvRef)

    return (
        <>
            <h1>Decargar plantilla</h1>
        <CvContainer className="cv-content" data-react-cv={template_id}>            
            <VisualizacionPlantilla template_id={template_id} />
        </CvContainer>
        </>
    )
    
}

export default PlantillaPage