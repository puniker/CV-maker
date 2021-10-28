import { useState } from "react"
import Input from '../components/formulario/pruebaInput'

function plantillas ()  {

    const [nombre, setNombre] = useState('iker')


    const change = ( value ) => {

            setNombre( value )

    }

    return (
        <>
            <h1>Todas las plantillas</h1>
            <form action="">
                <Input 
                    value={nombre} 
                    onChange={change}
                />
            </form>
        </>
    )
}

export default plantillas