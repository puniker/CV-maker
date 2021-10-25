import React, { useState } from 'react'
import { Imput } from '../components/formulario'

const data = {
    "nombre"   : "Iker",
    "apellido" : "Sastre",
    "telefono" : "680983974",
    "email"    : "iker.sastre97@gmail.com",
}

class CreaTuCv extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = data 
        
    }

    onChange(field, value) {
        // parent class change handler is always called with field name and value
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
                <form action="" onSubmit={this.onSubmit} >
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