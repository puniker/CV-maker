import { useParams } from "react-router"

function PlantillaPage (  ) {

    const { id } = useParams()

    return (
        <span>la plantilla con id {id}</span>
    )
    
}

export default PlantillaPage