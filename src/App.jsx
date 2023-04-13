import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Confirm from './components/Confirm'
import Profile from './components/Profile'

function App() {

  return (
    <Router>
      <Switch>
      <Route exact path="/" component ={Homepage} />
      <Route path="/login" component ={Login} />
      <Route path="/register" component ={Register} />
      <Route path="/dashboard" component ={Dashboard} />
      <Route path="/confirm" component ={Confirm} />
      <Route path="/profile" component ={Profile} />

      
      </Switch>
    </Router>
    
  )
}

export default App
