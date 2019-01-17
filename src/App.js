import React from 'react'
import { Root, Routes } from 'react-static'
import MediaQuery from 'react-responsive';

// components
import ResponsiveGrid from './components/grid/'
import Header from './components/header/'
import Footer from './components/footer/'
import Nav from './components/nav/'
import Controls from './components/controls/'

// styles
import './app.css'
//

export default() =>
  <Root>
    <ResponsiveGrid>
        <Header />
        <Controls />
        <MediaQuery key="mobile" query="(min-width: 1024px)">
          <Nav />
        </MediaQuery>
        <main className="main">
          <Routes />
        </main>
        <Footer />
    </ResponsiveGrid>
  </Root>
