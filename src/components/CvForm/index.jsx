import React from 'react'
import {Accordion, Container} from 'react-bootstrap';
import SectionGeneral from './SectionGeneral'
import SectionEstudios from './SectionEstudios'

function CvForm ( props ) {
    

    return (
        <>
        <Container>           
            
            <Accordion /*defaultActiveKey="0"*/>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Formulario general</Accordion.Header>
                    <Accordion.Body>
                        <SectionGeneral />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Datos academicos</Accordion.Header>
                    <Accordion.Body>
                        <SectionEstudios />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Container>
        </>
    )
}

export default CvForm