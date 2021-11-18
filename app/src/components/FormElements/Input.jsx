import { TextField } from '@mui/material'
import React from 'react'


export default ( {type, label, name, register, required, defaultValue, description} ) => {
    
    return (
        <>
            <TextField 
                id="standard-basic" 
                label={label} 
                variant="standard" 
                type="text"
                {...register(name, { required })} 
                defaultValue={defaultValue} />
        </>
    )

}
