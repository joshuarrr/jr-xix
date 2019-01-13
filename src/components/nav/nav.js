import React from 'react'
import NavLink from '../navlink/'

// styles
import './nav.css'
//

export default () =>
  <nav className="nav">
    <NavLink to="/">design</NavLink>
    <NavLink to="/code">code</NavLink>
    <NavLink to="/about">about</NavLink>
  </nav>