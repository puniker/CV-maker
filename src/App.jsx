import { useState } from 'react'
import Header from './components/header/index.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import CreaTuCv from './pages/CreaTuCv'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
       <Switch>
         <Route exact path="/crea-tu-cv" component={CreaTuCv}></Route>
         <Route exact path="/plantillas">
           <h1>plantillas</h1>
         </Route>
         <Route component={Home}></Route>
       </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
