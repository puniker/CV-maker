import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import UserContext, {UserProvider} from './Context/UserContext'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
