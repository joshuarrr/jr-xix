import React, { Component } from 'react'
import { Routes } from 'react-static'
import MediaQuery from 'react-responsive';

// components
import Header from '../header/'
import Footer from '../footer/'
import Nav from '../nav/'
import Controls from '../controls/'
//


class Grid extends Component {
  render = () => [
    <MediaQuery key="mobile" query="(max-width: 1024px)">
      <div className="mobile">
        <Header />
        <main className="main">
          <Routes />
        </main>
        <Footer />
        <Controls controls={['toggle-mode', 'toggle-fullscreen', 'toggle-color']} />
      </div>
    </MediaQuery>,
    <MediaQuery key="desktop" query="(min-width: 1025px)">
      <div className="desktop grid">
        <div className="left-column">
          <Header />
          <Nav />
          <Footer />
        </div>
        <main className="main">
          <Routes />
        </main>
        <div className="right-column">
          <Controls controls={['toggle-mode', 'toggle-fullscreen', 'toggle-color']} />
        </div>
      </div>
    </MediaQuery>
  ]
}


export default (Grid)
