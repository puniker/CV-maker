
import React from 'react'

function Imput ( props ) {

    const Change = ( evt ) => {
        const value = evt.target.value
        const name = evt.target.name
        props.onChange(value)
    }
    return (
        <div>
            <label htmlFor={props.fieldId}>{props.label}</label>
            <input 
                id={props.fieldId} 
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={Change}
            ></input>
        </div>
    )

}
export default Imput