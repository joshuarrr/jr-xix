import React from 'react'
import NavLink from './navlink'


export default () =>
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/code">code</NavLink>
    <NavLink to="/design">design</NavLink>
    <NavLink to="/about">about</NavLink>
  </nav>