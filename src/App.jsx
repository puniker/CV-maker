import { useState } from 'react'
import Header from './components/header/index.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pages from './pages'

function App() {

  var session = {'logged_in': false }
  if ( localStorage.getItem('session') ) {
    var session = JSON.parse( localStorage.getItem('session') )
  }
  
  const [isLogged, setIsLogged] = useState( session.logged_in )

  if ( isLogged ) {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
         <Switch>
           <Route path="/crea-tu-cv">
             <Pages.CreaTuCv />
           </Route>
           <Route path="/plantillas">
             <Pages.Plantillas />
           </Route>
           <Route component={Pages.Home}></Route>
         </Switch>
        </BrowserRouter>
  
      </div>
    )
  } else {
    return (
      <div className="App">
        <Pages.Login setIsLogged={setIsLogged} />
      </div>
    )
  }

}

export default App
