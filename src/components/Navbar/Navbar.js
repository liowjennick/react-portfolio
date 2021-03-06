import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.sass'

class Navbar extends React.Component {
  render () {
    return (
      <div id="navbar">
        <div className="navbar-title-container">
          <NavLink to="/" exact>
            <h1>NICK.</h1>
          </NavLink>
          <h3>FRONTEND WEB DEVELOPER</h3>
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
            <NavLink to="/contact" exact>
              <li><span>Contact</span></li>
            </NavLink>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar