import React, { useState } from 'react'
import {InputLabel, Select, FormControl, MenuItem} from '@mui/material'

interface Props {
    label: string;
    name: string;
    required?: boolean;
    register: any;
    defaultValue?: string;
    options: string[];
    description?: string;
}
export default ({label, name, register, required, defaultValue, options, description}: Props) => {

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
                    return <MenuItem key={`form_input_k_${e}`} value={e}>{e}</MenuItem>
                } else {
                    return <MenuItem key={`form_input_k_${e}`} value={e}>{e}</MenuItem>
                }
            } )}
            </Select>
        </FormControl>
    )

}