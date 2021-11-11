import { useParams } from "react-router"
import VisualizacionPlantilla from "../components/VisualizacionPlantilla"

function PlantillaPage (  ) {
    
    const { id } = useParams()
    

    return (
        <>
            <h1>Decargar plantilla</h1>
            <VisualizacionPlantilla id={id} />
        </>
    )
    
}

export default PlantillaPage