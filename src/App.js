import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.sass'

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import PortfolioPage from './pages/Portfolio/PortfolioPage'
import ContactPage from './pages/Contact/ContactPage'

class App extends React.Component {
  constructor () {
    super()
    window.addEventListener('scroll', () => {
      if (document.querySelector('.navbar-link-container').offsetTop < window.pageYOffset) {
        document.querySelector('#navbar').classList.add('fixed')
      }

      if (document.querySelector('.navbar-link-container').offsetHeight > window.pageYOffset) {
        document.querySelector('#navbar').classList.remove('fixed')
      }
    })
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
                <Route path="/contact" exact component={ContactPage} />
              </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
