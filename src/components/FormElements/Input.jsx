import React from 'react'
import {Form} from 'react-bootstrap'

export default ( {type, label, name, register, required, defaultValue, description} ) => {
    
    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                type={type} 
                {...register(name, { required })} 
                defaultValue={defaultValue}  />
            <Form.Text className="text-muted">
                {description}
            </Form.Text>
        </div>
    )

}
