import { Container } from '@mui/material'
import ListadoPlantillas from '../components/ListadoPlantillas'

function plantillas ()  {

    return (
        <>
            <Container>
                <h1>Todas las plantillas</h1>
                <ListadoPlantillas />
            </Container>
        </>
    )
}

export default plantillas