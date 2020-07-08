import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LandingPage, MapPage } from './views/'
import { Footer } from './components/footer'
import { MechanicShop } from './images/backgrounds'
import { MainImage, Schedule } from './views'
import { Navbar } from './components/bootstrap'

import './App.css'
import './index.css'
import './css/animations.css'
import './css/footer.css'
import './css/leaflet.css'
import './css/navbar.css'
import './css/schedule.css'
class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Router>
          <Switch>
            <Route
              exact
              path='/'
              component={() => (
                <LandingPage>
                  <MainImage background={MechanicShop} />
                  <Schedule />
                  <MapPage />
                  <Footer />
                </LandingPage>
              )}
            ></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
