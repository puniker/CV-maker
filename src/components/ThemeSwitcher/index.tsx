import {useState, useContext} from 'react'
import {LightMode, DarkMode} from '@mui/icons-material'
import ThemeContext from '../../Context/ThemeContext'
import { setItem } from '../../services/storageService'

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
        <button onClick={ switchTheme}>
            {(themeColor === 'light') ? <LightMode /> : <DarkMode />}
        </button>
    )
}