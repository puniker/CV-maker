import { useParams } from "react-router"
import VisualizacionPlantilla from "../components/VisualizacionPlantilla"
import {PictureAsPdf as PictureAsPdfIcon} from '@mui/icons-material'
import { Container } from "@mui/material"

function PlantillaPage (  ) {
    
    const { template_id } = useParams()
    
    const generarPdf = () => {

    }

    return (
        <>
            <h1>Decargar plantilla</h1>
            <Container>
                <div className="cta-download">
                    <button onClick={ generarPdf }>Generar PDF <PictureAsPdfIcon /></button>
                </div>
            </Container>
            <VisualizacionPlantilla template_id={template_id} />
        </>
    )
    
}

export default PlantillaPage