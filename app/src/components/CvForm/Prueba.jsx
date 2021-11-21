import { useState } from 'react';
import {Button, Link} from '@mui/material';

export default () => {

    

    const [inputFields, setInputFields] = useState([
      { id: 0, order: 0, firstName: '', lastName: '' },
    ])

    const addItem = () => {
        
        const order = inputFields[inputFields.length - 1 ].order
        setInputFields([...inputFields, { 'id' : Math.random() , 'order': order + 1 , 'firstName' : '' }])

    }
    const removeField = (id) => {
        
        const values  = [...inputFields];
        console.log( values )
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);

    }

    const upElement = ( id ) => {
        
        const values = [...inputFields]

        const indexData = values.findIndex( (element) => element.id == id )

        values[ indexData - 1 ].order = values[ indexData - 1 ].order +1
        values[ indexData ].order = values[ indexData ].order -1

        values.sort(function(a, b) {
            if (a.order < b.order) return -1
            if (a.order > b.order) return 1
            return 0
        })

        setInputFields(values)

    }
    const downElement = ( id ) => {
        
        const values = [...inputFields]

        const indexData = values.findIndex( (element) => element.id == id )

        values[ indexData + 1 ].order = values[ indexData + 1 ].order - 1
        values[ indexData ].order = values[ indexData ].order + 1

        values.sort(function(a, b) {
            if (a.order < b.order) return -1
            if (a.order > b.order) return 1
            return 0
        })

        setInputFields(values)

    }

    return (
        <>
        { inputFields.map( (item, index) => (
            <section key={item.id} id={`prueba_${index}_`} >
                <div className="content">
                    <button onClick={() => upElement(item.id)}>UP</button>
                    <button onClick={() => downElement(item.id)}>DOWN</button>
                    <Link href="#" color="inherit" onClick={() => removeField(item.id)}>Eliminar elemento</Link>
                    <p>Contenido de la pestaña. <br /> id: {item.id} <br /> orden: {item.order}</p>

                </div>
            </section>
        ))
        }
        <Button variant="contained" onClick={addItem}>Añadir elemento</Button>
        </>
    )
    

}