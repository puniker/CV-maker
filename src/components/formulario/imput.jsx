import React from 'react'
import { useForm } from "react-hook-form";
import {Form} from 'react-bootstrap'

function Imput ( {type, label, name, register, required, defaultValue, description} ) {

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
export default Imput