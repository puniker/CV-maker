import React, { useEffect, useState } from 'react'
import FormElements from '../FormElements'
import { useForm } from "react-hook-form"
import {Form, Col, Row, Button, Alert, Badge, Accordion} from 'react-bootstrap'

const datos_api = [
    {
        "id": 0,
        "centro": "ceinmark",
        "ciudad": "bilbao",
        "titulo": "desarrollo de aps",
        "fecha_inicio": "01-01-2001",
        "fecha_fin": "01-01-2001",
        "descripcion": "Aprendí a hacer apps"
    },
    {
        "id": 1,
        "centro": "colegio basauri",
        "ciudad": "basauri",
        "titulo": "bachi",
        "fecha_inicio": "01-01-2001",
        "fecha_fin": "01-01-2001",
        "descripcion": "no aprendí mucho"
    }
]


function SectionGeneral ( props ) {
    
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [showMsg, setShowMsg] = useState(false)

    const onSubmit = ( evt ) => {
        
        console.log( fields )
        console.log( evt )
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    //if ( isLoading ) {
    //    return <Alert key="loading-data" variant="primary" show="true">Cargando tus datos...</Alert>
    //}

    const academicFields = {
        'titulo'      : [{"key":"0", "type": "text", "label":"Carrera"}],
        'ciudad'      : [{"key":"0", "type": "text", "label":"Ciudad/Pueblo"}],
        'centro'      : [{"key":"0", "type": "text", "label":"Centro"}],
        'descripcion' : [{"key":"0", "type": "text", "label":"Descripcion"}]
    }


    const [fields, setFields] = useState( datos_api )


    const addItem = () => {

        setFields([
            ...fields, 
            {
                "id": `temp_${Math.floor( Math.random() * 10000 )}`,
                "centro": "",
                "ciudad": "",
                "titulo": "",
                "fecha_inicio": "",
                "fecha_fin": "",
                "descripcion": ""
            }
        ])

    }
    const removeItem = (id) => {

        const values  = [...fields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setFields(values);

    }
    return (
        <>
            <Alert key="success-msg" variant="success" show={showMsg}>
                Se han guardado tus datos.
            </Alert>
            <form className="" onSubmit={handleSubmit(onSubmit)} >

                <Accordion defaultActiveKey="0">
                { fields.map((item, index) => (

                    <Accordion.Item eventKey={index} key={`academyc_form_${index}`} id={item.id} data-test={index}>
                        <Accordion.Header>
                            <h6>{item.titulo}</h6>
                            <Badge bg="danger" onClick={() => removeItem(item.id)}>Eliminar elemento</Badge>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div key={`academyc_form_${index}`} id={item.id}>
                                <Row className='mb-3'>
                                    <Form.Group as={Col}>
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="Carrera"  
                                            name={`${item.id}_titulo`}
                                            defaultValue={item.titulo}
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col} >
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="Ciudad/Pueblo"
                                            name={`${item.id}_ciudad_pueblo`}
                                            defaultValue={item.ciudad}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3'>
                                    <Form.Group as={Col}>
                                        <FormElements.Input 
                                            type='text'
                                            register={register}
                                            label="Centro"
                                            name={`${item.id}_centro`}
                                            defaultValue={item.centro}
                                            />
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3'>
                                    <Form.Group as={Col}>
                                        <FormElements.Input 
                                            type='date'
                                            register={register}
                                            label="Fecha inicio"
                                            name={`${item.id}_fecha_inicio`}
                                            defaultValue={item.fecha_inicio}
                                            />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <FormElements.Input 
                                            type='date'
                                            register={register}
                                            label="Fecha fin"
                                            name={`${item.id}_fecha_fin`}
                                            defaultValue={item.fecha_fin}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3'>
                                    <Form.Group as={Col}>
                                        <FormElements.Input 
                                            type='textarea'
                                            register={register}
                                            label="Descipcion"
                                            name={`${item.id}_descripcion`}
                                            defaultValue={item.descripcion}
                                            />
                                    </Form.Group>
                                </Row>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>

                <Badge bg="primary" onClick={addItem} >Añadir elemento</Badge>
                <br />
                <br />
                <Button variant="primary" type="submit">Guardar datos</Button>
            </form>


        </>
    )
}

export default SectionGeneral
