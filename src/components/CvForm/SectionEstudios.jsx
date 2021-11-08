import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FormElements from '../FormElements'
import { useForm } from "react-hook-form"
import {Form, Col, Row, Button, Alert} from 'react-bootstrap'

function SectionGeneral ( props ) {
    
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [showMsg, setShowMsg] = useState(false)

    const onSubmit = ( evt ) => {
        console.log( evt )
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    //if ( isLoading ) {
    //    return <Alert key="loading-data" variant="primary" show="true">Cargando tus datos...</Alert>
    //}

    return (
        <>
            <Alert key="success-msg" variant="success" show={showMsg}>
                Se han guardado tus datos.
            </Alert>

            <form onSubmit={handleSubmit(onSubmit)} >
                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <FormElements.Input 
                            type='text'
                            register={register}
                            label="Carrera"  
                            name='estudio'
                        />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <FormElements.Input 
                            type='text'
                            register={register}
                            label="Ciudad/Pueblo"
                            name='ciudad_pueblo'
                        />
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <FormElements.Input 
                            type='text'
                            register={register}
                            label="Centro"
                            name='centro'
                        />
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <FormElements.Input 
                            type='date'
                            register={register}
                            label="Fecha inicio"
                            name='fecha_inicio'
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FormElements.Input 
                            type='date'
                            register={register}
                            label="Fecha fin"
                            name='fecha_fin'
                        />
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <FormElements.Input 
                            type='textarea'
                            register={register}
                            label="Descipcion"
                            name='descripcion'
                        />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">Guardar datos</Button>
            </form>
        </>
    )
}

export default SectionGeneral
