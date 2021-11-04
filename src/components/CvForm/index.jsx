import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Imput } from '../formulario'
import { useForm } from "react-hook-form"
import {Form, Col, Row, Button, Container, Alert} from 'react-bootstrap';

const get_endpoint = 'http://localhost:3080/cv-data'
const post_endpoint = 'http://localhost:3080/update'



function CvForm ( props ) {
    
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [showMsg, setShowMsg] = useState(false)

    useEffect( () => {
        
        axios.get( get_endpoint, {
            params: {
                userID: 1
            }
        })
        .then( (response) => {
            setData( response.data.data )
            setIsLoading(false)
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }, [])
    
    const onSubmit = ( evt ) => {
        evt.preventDefault
        console.log( evt )

        axios.get(post_endpoint, {
            params: {
                uuid: 1,
                nombre: evt.nombre,
                apellido: evt.apellido,
                telefono: evt.telefono,
                email: evt.email
            }
        })
        .then(function (response) {
            console.log(response);
            setData(evt)
            setShowMsg(true)
            setTimeout(()=>{ setShowMsg(false) }, 3000)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed    code ...
        })
    }
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    if ( isLoading ) {
        return <Alert key="loading-data" variant="primary" show="true">Cargando tus datos...</Alert>
    }

    return (
        <>
        <Container>
            <Alert key="success-msg" variant="success" show={showMsg}>
                Se han guardado tus datos.
            </Alert>
            <form onSubmit={handleSubmit(onSubmit)} >
                <section className="form-general">
                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Imput 
                                type='text'
                                register={register}
                                label="Nombre"  
                                name='nombre'
                                defaultValue={ data.nombre }
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Apellidos"
                                name='apellido'
                                defaultValue={data.apellido}
                                required
                            />
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Imput 
                                type='text'
                                register={register}
                                label="Teléfono"  
                                name='telefono'
                                defaultValue={data.telefono}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Email de contacto"  
                                name='email'
                                defaultValue={data.email}
                                required
                            />
                        </Form.Group>
                    </Row>

                </section>
                <section className="form-estudios"></section>
                <section className="form-experiencia"></section>
                <section className="form-idiomas"></section>
                <section className="form-puntos-fuertes"></section>
                <section className="form-proyectos"></section>

                <Button variant="primary" type="submit">Guardar datos</Button>
            </form>
        </Container>
        </>
    )
}

export default CvForm