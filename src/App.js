import React from 'react'
import { Root, Routes } from 'react-static'

// components
import Header from './components/header/'
import Footer from './components/footer/'
import Nav from './components/nav/'
import Controls from './components/controls/'

// styles
import './app.css'
//

export default() =>
  <Root>
  <div className="grid">
    <Header />
    <Controls />
    <Nav />
    <main className="main">
      <Routes />
    </main>
    <Footer />
  </div>
  </Root>
