import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Imput } from '../formulario'

const get_endpoint = 'http://localhost:3080/cv-data'
const post_endpoint = 'http://localhost:3080/update'



const useField = ( {type, val} ) => {
    //console.log( val )
    const [value, setValue] = useState( val )
    const onChange = value => {
        setValue(value)
    }

    return{
        type,
        value,
        onChange
    }
}


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
        evt.preventDefault()
        console.log( nombre.value)
        console.log( apellido.value)
        // Send a GET request
        axios.get(post_endpoint, {
            params: {
                uuid: props.userID,
                nombre: nombre.value,
                apellido: apellido.value,
                telefono: telefono.value,
                email: email.value
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
    
    
    const nombre = useField({type: 'text', val: data.nombre })
    const apellido = useField({type: 'text', val: data.apellido })
    const telefono = useField({type: 'text', val: data.telefono })
    const email = useField({type: 'text', val: data.email })

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <Imput 
                    id="nombre"
                    name="nombre"
                    label="Tu nombre"
                    { ... nombre }
                />
                <Imput 
                    id="apellido"
                    name="apellido"
                    label="Apellido"
                    { ... apellido }
                />
                <Imput 
                    id="telefono"
                    name="telefono"
                    label="Número de teléfono"
                    { ... telefono }
                />
                <Imput 
                    id="email"
                    name="email"
                    label="Email"
                    { ... email }
                />
                <Imput 
                    type="date" 
                    id="fecha_nacimiento"
                    name="fecha_nacimiento"
                    label="Fecha nacimiento"
                />
                <button type="submit">Guardar datos</button>
            </form>
        </>
    )
}

export default CvDataForm