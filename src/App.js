import React from 'react'
import { Root, Routes } from 'react-static'
import MediaQuery from 'react-responsive';

// components
import ResponsiveGrid from './components/grid/'
import Header from './components/header/'
import Footer from './components/footer/'
import Nav from './components/nav/'
import Controls from './components/controls/'
import ScrollButton from './components/scrollToTop/'

// styles
import './app.css'
//

export default() =>
  <Root>
    <ResponsiveGrid>
        <Header />
        <Controls />
        <Nav />
        <main className="main">
          <Routes />
        </main>
        <ScrollButton
          scrollStepInPx="50"
          delayInMs="16.66"
        />
        <MediaQuery key="mobile" query="(max-width: 1024px)">
          <Nav />
        </MediaQuery>
        <Footer />
    </ResponsiveGrid>
  </Root>
