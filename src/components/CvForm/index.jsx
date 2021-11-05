import React from 'react'
import {Accordion, Container} from 'react-bootstrap';
import SectionGeneral from './SectionGeneral'

function CvForm ( props ) {
    

    return (
        <>
        <Container>           
            
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Formulario general</Accordion.Header>
                    <Accordion.Body>
                        <SectionGeneral />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Datos academicos</Accordion.Header>
                    <Accordion.Body>
                        <h3>Formulario de datos academicos</h3>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Container>
        </>
    )
}

export default CvForm