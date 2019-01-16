import React from 'react'
import { Root, Routes, Head } from 'react-static'

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
    <Head>
      {/*<link rel="stylesheet" href="//brick.freetls.fastly.net/Fira+Mono:400" />*/}
    </Head>
    <ResponsiveGrid>
        <Header />
        <Controls />
        <Nav />
        <main className="main">
          <Routes />
        </main>
        <Footer />
    </ResponsiveGrid>
  </Root>
