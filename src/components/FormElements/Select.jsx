import React from 'react'
import {Form} from 'react-bootstrap'

export default ({label, name, register, required, defaultValue, description}) => {

    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Select aria-label="Default select example" 
                {...register(name, { required })}
            >
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
            </Form.Select>
            <Form.Text className="text-muted">
                {description}
            </Form.Text>
        </div>
    )

}