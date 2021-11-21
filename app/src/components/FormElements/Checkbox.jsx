import { FormControlLabel, FormGroup, Checkbox } from "@mui/material"
import React from "react"

export default ({label, name, register, required, defaultChecked=false}) => {

    return (
        <FormGroup>
            {(defaultChecked)
            ? <FormControlLabel control={<Checkbox { ...register(name, {required}) } defaultChecked />} label={label} />
            : <FormControlLabel control={<Checkbox { ...register(name, {required}) } />} label={label} />
            }
            
        </FormGroup>
    )

}