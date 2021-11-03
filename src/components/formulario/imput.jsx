import React from 'react'
import { useForm } from "react-hook-form";

function Imput ( {type, label, name, register, required, defaultValue} ) {

    return (
        <div>
            <label>{label}</label>
            <br />
            <input 
                type={type}
                {...register(name, { required })} 
                defaultValue={defaultValue} 
            /> 
        </div>
    )

}
export default Imput