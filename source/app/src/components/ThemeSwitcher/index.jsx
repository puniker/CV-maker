import {useState, useContext} from 'react'
import {LightMode, DarkMode} from '@mui/icons-material'
import ThemeContext from '../../Context/ThemeContext'

export default () => {
    const {themeColor, setThemeColor } = useContext(ThemeContext)
    
    const switchTheme = () => {
        if ( themeColor === 'light' ) {
            setThemeColor( 'dark' )
        } else {
            setThemeColor( 'light' )
        }
    }

    return(
        <button onClick={ switchTheme}>
            {(themeColor === 'light') ? <LightMode /> : <DarkMode />}
        </button>
    )
}