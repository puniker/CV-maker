import React, { useState } from 'react'
import {InputLabel, Select, FormControl, MenuItem} from '@mui/material'

export default ({label, name, register, required, defaultValue, options, description}) => {

    return (
        <FormControl fullWidth>
            <InputLabel id={`select-${name}-label`}>{label}</InputLabel>
            <Select
            labelId={`select-${name}-label`}
            label={label}
            id={`select-${name}`}
            defaultValue={defaultValue}
            { ...register(name, {required}) }
            >
            {options.map( e => {
                if ( e == defaultValue ) {
                    return <MenuItem value={e}>{e}</MenuItem>
                } else {
                    return <MenuItem value={e}>{e}</MenuItem>
                }
            } )}
            </Select>
        </FormControl>
    )

}