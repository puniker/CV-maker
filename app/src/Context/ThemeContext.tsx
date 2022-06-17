import {useState, createContext} from 'react'
import {ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'

const Context = createContext({})

export function ThemeProvider ( {children}: any ) {

    const [themeColor, setThemeColor] = useState<'light' | 'dark'>('light') // varia entre light y dark

    const theme = createTheme({
        palette: {
          mode: themeColor,
        },
      })

    return (
        <Context.Provider value={{ themeColor, setThemeColor }} >
          <MuiThemeProvider theme={theme}>
              {children}
          </MuiThemeProvider>
        </Context.Provider>
    )
}

export default Context