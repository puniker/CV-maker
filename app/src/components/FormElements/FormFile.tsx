import { FormControl } from '@mui/material'
import React from 'react'


export default ( {label, name, register, required, defaultValue, description} ) => {
    
    return (
        <>
        <FormControl fullWidth>
            {label}<input 
                type="file"
                id="standard-basic" 
                name={name}
                {...register(name, { required })} 
            />
        </FormControl>
        </>
    )

}
