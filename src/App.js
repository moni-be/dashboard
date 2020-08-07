import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PageProfile from './MonDashboard/PageProfile'
import PageInvestissement from './MonDashboard/PageInvestissement'
import './App.css'
import './MonDashboard/Page.css'

function App () {
  return (
    <div className='container-app'>
      <Switch>
        <Route exact path='/' component={PageProfile} />
        <Route path='/PageInvestissement' component={PageInvestissement} />
      </Switch>
    </div>
  )
}

export default App
