import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.sass'

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'


class App extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div id="app">
        <Router>
          <div className="nav-container">
            <Navbar />
          </div>

          <div className="page-container">
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/portfolio" exact component={PortfolioPage} />
              </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
