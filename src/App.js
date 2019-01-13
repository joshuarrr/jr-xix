import React from 'react'
import { Root, Routes } from 'react-static'

// components
import Nav from './components/nav'
import './app.css'


export default() =>
  <Root>
    <Nav />
    <div className="content">
      <Routes />
    </div>
  </Root>
