import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.sass'
import HomeIcon from '@material-ui/icons/Home'
import PortfolioIcon from '@material-ui/icons/Work'

class Navbar extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div id="navbar">
        <div className="navbar-title-container">
          <NavLink to="/" exact>
            <h1>NICK.</h1>
          </NavLink>
          <h3>FULL-STACK WEB DEVELOPER</h3>
        </div>

        <div className="navbar-link-container">
          <ul>
            <NavLink to="/" exact>
              <li><span>Home</span></li>
            </NavLink>
            <NavLink to="/about" exact>
              <li><span>About</span></li>
            </NavLink>
            <NavLink to="/portfolio" exact>
              <li><span>Portfolio</span></li>
            </NavLink>
            <NavLink to="/resume" exact>
              <li><span>Resume</span></li>
            </NavLink>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar