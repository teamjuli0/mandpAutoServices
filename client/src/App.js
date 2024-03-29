import React, { lazy, Suspense } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LandingPage } from './views/'
import { MechanicShop } from './images/backgrounds'
import { MainImage, Schedule } from './views'
import { Navbar } from './components/bootstrap'
import { Footer } from './components/footer'

import './App.css'
import './index.css'
import './css/animations.css'
import './css/footer.css'
import './css/leaflet.css'
import './css/navbar.css'
import './css/schedule.css'

const MapPage = React.lazy(() => import('./views/mapPage'))

const App = () => (
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
              <Suspense fallback={<div>Loading...</div>}>
                <MapPage />
              </Suspense>
              <Footer />
            </LandingPage>
          )}
        ></Route>
      </Switch>
    </Router>
  </>
)

export default App
