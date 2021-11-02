import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Imput } from '../formulario'

const get_endpoint = 'http://localhost:3080/cv-data'
const post_endpoint = 'http://localhost:3080/update'



const useField = ( {type} ) => {
    const [value, setValue] = useState('')

    const onChange = event => {
        setValue(event.target.value)
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
        console.log( '9ker')
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

    const onChange = (name, value) => {
        setData({[name]:value})
    }
    
    const onSubmit = ( evt ) => {
        evt.preventDefault()
        console.log( data )
        // Send a GET request
        axios.get(post_endpoint, {
            params: {
                uuid: props.userID,
                nombre: data.nombre,
                apellido: data.apellido,
                telefono: data.telefono,
                email: data.email
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

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <Imput 
                    type="text" 
                    id="nombre"
                    name="nombre"
                    label="Tu nombre"
                    value={data.nombre}
                    onChange={onChange}
                />
                <Imput 
                    type="text" 
                    id="apellido"
                    name="apellido"
                    label="Apellido"
                    value={data.apellido}
                    onChange={onChange}
                />
                <Imput 
                    type="text" 
                    id="telefono"
                    name="telefono"
                    label="Número de teléfono"
                    value={data.telefono}
                    onChange={onChange}
                />
                <Imput 
                    type="email" 
                    id="email"
                    name="email"
                    label="Email"
                    value={data.email}
                    onChange={onChange}
                />
                <Imput 
                    type="date" 
                    id="fecha_nacimiento"
                    name="fecha_nacimiento"
                    label="Fecha nacimiento"
                    value={data.fecha_nacimiento}
                    onChange={onChange}
                />
                <button type="submit">Guardar datos</button>
            </form>
        </>
    )
}

export default CvDataForm