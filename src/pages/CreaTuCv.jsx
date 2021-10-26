import axios from 'axios'
import React, { useState } from 'react'
import { Imput } from '../components/formulario'


const data = {
    //"nombre"   : "Iker",
    //"apellido" : "Sastre",
    //"telefono" : "680983974",
    //"email"    : "iker.sastre97@gmail.com",
}
const endpoint = 'http://localhost:3080/cv-data/1'

class CreaTuCv extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {} 

        axios.get(endpoint)
        .then( (res) => {
            this.setState( res.data.data )
        })
        .catch( ( error ) => {
            console.log( error )
        })
        .then( () => {
            // code ...
        })
        
    }

    onChange(field, value) {
        this.setState( {[field]: value} );
    }

    onSubmit( evt ) {
        evt.preventDefault()
        console.log('formulario enviado')
    }

    render() {

        return (
            <>
                <h1>Crea tu cv</h1>
                <span>{this.state.nombre} {this.state.apellido}</span>
                <form action="" onSubmit={this.onSubmit.bind(this)} >
                    <Imput 
                        type="text" 
                        id="nombre"
                        name="nombre"
                        label="Tu nombre"
                        value={this.state.nombre}
                        onChange={this.onChange.bind(this)}
                    />
                    <Imput 
                        type="text" 
                        id="apellido"
                        name="apellido"
                        label="Apellido"
                        value={this.state.apellido}
                        onChange={this.onChange.bind(this)}
                    />
                    <Imput 
                        type="text" 
                        id="telefono"
                        name="telefono"
                        label="Número de teléfono"
                        value={this.state.telefono}
                        onChange={this.onChange.bind(this)}
                    />
                    <Imput 
                        type="email" 
                        id="email"
                        name="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </>
        )

    }
}

export default CreaTuCv