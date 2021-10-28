import { useState } from 'react'
import Header from './components/header/index.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pages from './pages'

function App() {

  
  if ( localStorage.getItem('session') ) {
    var x = JSON.parse( localStorage.getItem('session') )
    var c_status = x.logged_in,
        c_user = x.userID
  } else {
    var c_status = '',
        c_user = ''
  }

  const [isLogged, setIsLogged] = useState( c_status )
  const [userId, setUserId ] = useState( c_user )


  if ( isLogged == true ) {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
         <Switch>
           <Route path="/crea-tu-cv">
             <Pages.CreaTuCv userID={userId} />
           </Route>
           <Route path="/plantillas">
             <Pages.Plantillas userID={userId} />
           </Route>
           <Route component={Pages.Home}></Route>
         </Switch>
        </BrowserRouter>
  
      </div>
    )
  } else {
    return (
      <div className="App">
        <Pages.Login setIsLogged={setIsLogged} setUserId={setUserId} />
      </div>
    )
  }

}

export default App
