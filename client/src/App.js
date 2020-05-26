import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { LandingPage } from './views/'

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
