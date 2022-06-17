import { FormControl, TextField } from '@mui/material'
import React from 'react'

interface Props {
    type: string;
    label?: string;
    name: string;
    register: any;
    required?: 'required';
    defaultValue?: string | number;
    description?: string;
}
export default ( {type= "text", label, name, register, required, defaultValue, description}: Props ) => {
    
    return (
        <>
        <FormControl fullWidth>
            <TextField 
                type={type}
                id="standard-basic" 
                label={label} 
                variant="standard"
                {...register(name, { required })} 
                defaultValue={defaultValue} />
        </FormControl>
        </>
    )

}
