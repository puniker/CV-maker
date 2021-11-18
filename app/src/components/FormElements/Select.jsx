import React from 'react'
import {Form} from 'react-bootstrap'

export default ({label, name, register, required, defaultValue, options, description}) => {

    return (
        <div>
            <Form.Label>{label}</Form.Label>
            <Form.Select aria-label="Default select example" 
                {...register(name, { required })}
            >
                {options.map( e => {
                    if ( e == defaultValue ) {
                        return <option value={e} selected>{e}</option>
                    } else {
                        return <option value={e}>{e}</option>
                    }
                } )}
            </Form.Select>
            <Form.Text className="text-muted">
                {description}
            </Form.Text>
        </div>
    )

}