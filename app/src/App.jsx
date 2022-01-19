import { useState, useContext } from 'react'
import Header from './components/header/index.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pages from './pages'
import AdminPages from './admin/pages'
import UserContext, {UserProvider} from './Context/UserContext'

function App() {

  
  const {userId, userName, isAdmin} = useContext(UserContext)
  console.log(userId)
  
  if ( userId ) {
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
            <Route path="/plantilla/:template_id">
              <Pages.PlantillaPage />
            </Route>
            <Route path="/user">
              <Pages.Perfil />
            </Route>
            <Route path="/administrator">
              { (isAdmin) ? <AdminPages.Administrator /> : 'Necesita permisos de administrador para acceder al gestor de la app.' }
              
            </Route>
            <Route path="/" component={Pages.Home}></Route>
          </Switch>
        </BrowserRouter>
  
      </div>
    )
  } else {
    return (
      <div className="App">
        <Pages.Login />
      </div>
    )
  }

}

export default App
