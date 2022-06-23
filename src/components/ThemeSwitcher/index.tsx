import {useState, useContext} from 'react'
import {LightMode, DarkMode} from '@mui/icons-material'
import ThemeContext from '../../Context/ThemeContext'
import { setItem } from '../../services/storageService'
import { IconButton, Typography } from '@mui/material'

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default () => {
    const {themeColor, setThemeColor } = useContext<any>(ThemeContext)
    
    const switchTheme = () => {
        if ( themeColor === 'light' ) {
            setThemeColor( 'dark' )
            setItem('theme', {"mode": 'dark'})
        } else {
            setThemeColor( 'light' )
            setItem('theme', {"mode": 'light'})
        }
    }

    return(
        <>
            <IconButton sx={{ ml: 1 }} onClick={switchTheme} color="inherit">
                {themeColor === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </>
    )
}