import { useState, useContext, useEffect } from 'react'
import Header from './components/header/index.jsx'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Pages from './pages'
import AdminPages from './admin/pages'
import UserContext, {UserProvider} from './Context/UserContext'
import CreaTuCv from './pages/CreaTuCvPage.js'
import LoginPage from './pages/LoginPage.js'
import { Grid } from '@mui/material'
import SignUpPage from './pages/SignUpPage.js'
import TemplatesListPage from './pages/TemplatesListPage.js'
import { firebaseObserver } from './services/firebaseInit.js'

function App() {

  const [loading, setIsLoading] = useState<boolean>(true)
  const {isLogged, isAdmin} = useContext<any>(UserContext)

  useEffect(() => {
    firebaseObserver.subscribe('authStateChanged', () => {
        setIsLoading(false);
    });
    return () => { firebaseObserver.unsubscribe('authStateChanged'); }
  }, []);

  if(loading) return 'loading...'
  return (
    <Grid className="App" 
    sx={{
      minHeight: '100vh', 
      bgcolor: 'background.default',
      color: 'text.primary',
    }}>
      <BrowserRouter >
          {(isLogged) && <Header /> }
          {(isLogged) ? <Redirect to="/crea-tu-cv" /> : <Redirect to="/login" /> }
          <Switch>
            <Route path="/crea-tu-cv">
              <CreaTuCv />
            </Route>
            <Route path="/plantillas">
              <TemplatesListPage />
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
            <Route path="/registro">
              <SignUpPage />
            </Route>
            <Route path="/" component={Pages.Home}> </Route>
          </Switch>
      </BrowserRouter>
    </Grid>
  )

}

export default App
