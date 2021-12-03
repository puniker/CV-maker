import { useState } from 'react'
import Header from './components/header/index.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pages from './pages'
import UserContext from './Context/UserContext'

function App() {

  const [session, setSession] = useState({'logged_in': false })
  
  console.log(session)
  
  if ( session.logged_in ) {
    return (
      <div className="App">
        <UserContext.Provider value={{'id': session.user.id, 'is_admin': session.user.is_admin}}>
          <BrowserRouter>
            <Header />
          <Switch>
            <Route path="/crea-tu-cv">
              <Pages.CreaTuCv />
            </Route>
            <Route path="/plantillas">
              <Pages.Plantillas />
            </Route>
            <Route path="/plantilla/:template_id">
              <Pages.PlantillaPage />
            </Route>
            <Route path="/user">
              <Pages.Perfil />
            </Route>
            <Route path="/administrator">
              { (session.user.is_admin) ? <Pages.Perfil /> : 'Necesita permisos de administrador para acceder al gestor de la app.' }
              
            </Route>
            <Route path="/" component={Pages.Home}></Route>
          </Switch>
          </BrowserRouter>
        </UserContext.Provider>
  
      </div>
    )
  } else {
    return (
      <div className="App">
        <Pages.Login setSession={setSession} />
      </div>
    )
  }

}

export default App
