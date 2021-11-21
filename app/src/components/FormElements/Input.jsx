import { FormControl, TextField } from '@mui/material'
import React from 'react'


export default ( {type= "text", label, name, register, required, defaultValue, description} ) => {
    
    return (
        <>
        <FormControl fullWidth>
            <TextField 
                type={type}
                id="standard-basic" 
                label={label} 
                variant="standard" 
                type="text"
                {...register(name, { required })} 
                defaultValue={defaultValue} />
        </FormControl>
        </>
    )

}
