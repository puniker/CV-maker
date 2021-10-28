import axios from 'axios'
import React, { useState } from 'react'
import { Imput } from '../components/formulario'

const get_endpoint = 'http://localhost:3080/cv-data'
const post_endpoint = 'http://localhost:3080/update'

const d = {
    "uuid"     : "0",
    "nombre"   : "Iker",
    "apellido" : "Sastre Antón",
    "telefono" : "680983974",
    "email"    : "iker.sastre97@gmail.com",
    "fecha_nacimiento" : "08/08/1997"
  }

function CreaTuCv ( props ) {

    
    const [data, setData] = useState(d)
    
    const onChange = (name, value) => {
        setData({[name]:value})
    }    


    return (
        <>
            <form action="">
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
            </form>
        </>
    )
}


export default CreaTuCv