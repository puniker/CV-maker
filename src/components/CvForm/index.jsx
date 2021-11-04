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
                email: evt.email,
                fecha_nacimiento: evt.fecha_nacimiento,
                direccion: evt.direccion,
                lugar_nacimiento: evt.lugar_nacimiento,
                c_postal: evt.c_postal,
                ciudad_pueblo: evt.ciudad_pueblo,
                genero: evt.genero,
                nacionalidad: evt.nacionalidad,
                estado_civil: evt.estado_civil,
                sitio_web: evt.sitio_web,
                linkedin: evt.linkedin,
                twitter: evt.twitter 
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
                            />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Apellidos"
                                name='apellido'
                                defaultValue={data.apellido}
                            />
                        </Form.Group>
                    </Row>

                    <Row className='mb-3'>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Email de contacto"  
                                name='email'
                                defaultValue={data.email}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Imput 
                                type='text'
                                register={register}
                                label="Teléfono"  
                                name='telefono'
                                defaultValue={data.telefono}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Direccion"  
                                name='direccion'
                                defaultValue={data.direccion}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} >
                            <Imput 
                                type='date'
                                register={register}
                                label="Fecha de nacimiento"  
                                name='fecha_nacimiento'
                                defaultValue={data.fecha_nacimiento}
                            />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Lugar de nacimiento"  
                                name='lugar_nacimiento'
                                defaultValue={data.lugar_nacimiento}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} >
                            <Imput 
                                type='number'
                                register={register}
                                label="Código postal"  
                                name='c_postal'
                                defaultValue={data.c_postal}
                            />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Ciudad/Pueblo"  
                                name='ciudad_pueblo'
                                defaultValue={data.ciudad_pueblo}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Género"  
                                name='genero'
                                defaultValue={data.genero}
                            />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Nacionalidad"  
                                name='nacionalidad'
                                defaultValue={data.nacionalidad}
                            />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Estado civil"  
                                name='estado_civil'
                                defaultValue={data.estado_civil}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Sitio Web"  
                                name='sitio_web'
                                defaultValue={data.sitio_web}
                            />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="LinkedIn"  
                                name='linkedin'
                                defaultValue={data.linkedin}
                            />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Imput 
                                type='text'
                                register={register}
                                label="Twitter"  
                                name='twitter'
                                defaultValue={data.twitter}
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