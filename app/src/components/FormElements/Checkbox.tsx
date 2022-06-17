import { FormControlLabel, FormGroup, Checkbox } from "@mui/material"
import React from "react"

interface Props {
    label: string;
    name: string;
    register: any;
    required?: boolean;
    defaultChecked?: boolean;
}
export default ({label, name, register, required, defaultChecked=false}: Props) => {

    return (
        <FormGroup>
            {(defaultChecked)
            ? <FormControlLabel control={<Checkbox { ...register(name, {required}) } defaultChecked />} label={label} />
            : <FormControlLabel control={<Checkbox { ...register(name, {required}) } />} label={label} />
            }
            
        </FormGroup>
    )

}