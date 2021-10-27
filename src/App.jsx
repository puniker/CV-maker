import { useState } from 'react'
import Header from './components/header/index.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import CreaTuCv from './pages/CreaTuCv'
import Login from './pages/Login'

function App() {

  const [isLogged, setIsLogged] = useState(false)
  const [userId, setUserId ] = useState(0)

  if ( isLogged == true ) {
    return (
      <div className="App">
        bienvenida{userId}
        <BrowserRouter>
          <Header />
         <Switch>
           <Route exact path="/crea-tu-cv">
             <CreaTuCv userID={userId} />
           </Route>
           <Route exact path="/plantillas">
             <h1>plantillas</h1>
           </Route>
           <Route component={Home}></Route>
         </Switch>
        </BrowserRouter>
  
      </div>
    )
  } else {
    return (
      <div className="App">
        <Login setIsLogged={setIsLogged} setUserId={setUserId} />
      </div>
    )
  }

}

export default App
