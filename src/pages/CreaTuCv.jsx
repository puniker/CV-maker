import axios from 'axios'
import React, { useState } from 'react'
import { Imput } from '../components/formulario'

const endpoint = 'http://localhost:3080/cv-data'

class CreaTuCv extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {} 

        axios.get(endpoint, {
            params:{
                userID: props.userID
            }
        })
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
        console.log(this.state.nombre)
        axios.post('http://localhost:3080/update', null,{ params: {
            uuid: this.props.userID,
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            telefono: this.state.telefono,
            email: this.state.email
        }})
        .then( ( res ) => {
            console.log( res )
            console.log('formulario enviado')
        })
        .catch( ( err ) => {
            console.log( err )
        })


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
                    <Imput 
                        type="date" 
                        id="fecha_nacimiento"
                        name="fecha_nacimiento"
                        label="Fecha nacimiento"
                        value={this.state.fecha_nacimiento}
                        onChange={this.onChange.bind(this)}
                    />
                    <button type="submit">Guardar datos</button>
                </form>
            </>
        )

    }
}

export default CreaTuCv