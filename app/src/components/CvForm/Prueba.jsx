import { useState } from "react"

import {Button} from '@mui/material';

export default () => {

    
    const [fields, setFields] = useState([
        { 'id':0, 'firstName': '' },
    ])
    const [inputFields, setInputFields] = useState([
      { id: Math.random, firstName: '', lastName: '' },
    ]);

    const addItem = () => {
        
        setFields([...fields, { 'id' : Math.random() , 'firstName' : '' }])

    }
    const removeField = (id) => {

        const values  = [...fields];
        console.log( values )
        values.splice(values.findIndex(value => value.id === id), 1);
        setFields(values);

    }

    return (
        <>
        <Button variant="contained">Hello World</Button>
        </>
    )

}