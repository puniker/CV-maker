import React, { useState } from "react"
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default ({label, name, register, required, defaultValue, description} ) => {
    

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  
  const handleChange = (prop) => ( evt ) => {
    setValues({ ...values, [prop]: evt.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
        />
      </FormControl>
  )
}