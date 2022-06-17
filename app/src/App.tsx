import { useState, useContext } from 'react'
import Header from './components/header/index.jsx'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Pages from './pages'
import AdminPages from './admin/pages'
import UserContext, {UserProvider} from './Context/UserContext'
import {SetInitialContext} from './controller/AppInitController'
import CreaTuCv from './pages/CreaTuCvPage.js'
import LoginPage from './pages/LoginPage.js'

function App() {

  const {userId, isAdmin} = useContext<any>(UserContext)
  
  SetInitialContext()

  return (
    <div className="App">
      <BrowserRouter>
          {(userId) && <Header /> }
          {(userId) ? <Redirect to="/crea-tu-cv" /> : <Redirect to="/login" /> }
          <Switch>
            <Route path="/crea-tu-cv">
              <CreaTuCv />
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
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/" component={Pages.Home}> </Route>
          </Switch>
      </BrowserRouter>
    </div>
  )

}

export default App
