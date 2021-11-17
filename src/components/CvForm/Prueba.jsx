import { useState } from "react"


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
        <div className="">contacos</div>
        <form action="">
            { fields.map(item => (
                <div key={item.id} key={item.id}>
                    <input type="text" 
                    name="firstName"
                    label="First Name" />
                    <span onClick={()=>removeField(item.id)}>Quitar campo</span>
                </div>
            ))}
            <button type="submit"></button>
        </form>
        <button onClick={addItem}>Añadir elemento</button>
        </>
    )

}