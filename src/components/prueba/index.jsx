import React, {Component} from 'react'

class Prueba extends React.Component {

    constructor( props ) {
        
        super(props);
        console.log( this.props )
        //this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange( e ) {
        this.setState({name:'sonia'})
    }

    render() {
        return 'hola'
    }
}

export default Prueba