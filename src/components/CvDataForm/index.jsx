import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Imput } from '../formulario'
import { useForm } from "react-hook-form"

const get_endpoint = 'http://localhost:3080/cv-data'
const post_endpoint = 'http://localhost:3080/update'



function CvDataForm ( props ) {
    
    const [data, setData] = useState('')
    
    
    useEffect( () => {
        
        axios.get( get_endpoint, {
            params: {
                userID: 1
            }
        })
        .then( (response) => {
            console.log( response.data.data )
            setData( response.data.data )
        })
        .catch(function (error) {
            console.log(error);
        })
        
    }, [])
    
    const onSubmit = ( evt ) => {
        evt.preventDefault
        console.log( 'data', data )
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
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed    code ...
        })
    }
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >

                <Imput 
                    type='text'
                    register={register}
                    label="Introduce tu nombre"  
                    name='nombre'
                    defaultValue={data.nombre}
                />
                <Imput 
                    type='text'
                    register={register}
                    label="Introduce tu apellido"  
                    name='apellido'
                    defaultValue={data.apellido}
                />
                <Imput 
                    type='text'
                    register={register}
                    label="Introduce tu telef"  
                    name='telefono'
                    defaultValue={data.telefono}
                />
                <Imput 
                    type='text'
                    register={register}
                    label="Introduce tu email"  
                    name='email'
                    defaultValue={data.email}
                />

                <button type="submit">Guardar datos</button>
            </form>
        </>
    )
}

export default CvDataForm