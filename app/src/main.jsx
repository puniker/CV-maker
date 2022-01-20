import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import App from './App'
import {UserProvider} from './Context/UserContext'
import {ThemeProvider} from './Context/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
