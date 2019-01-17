import React from 'react'
import { Head } from 'react-static'

// components
import ScrollButton from '../components/scrollToTop/'
//

export default () => [
  <Head key="head">
    <title>joshuar(HTML + CSS + JS)</title>
  </Head>,
  <section key="content" className="code projects">
    <section className="project-summary">
      <h1>/* React Image Loader Thing */</h1>
      <p>In development: A React Native music collaboration app that facilitates conversations around specific sections of recordings.</p>
      {/*<Img name="jr-xix/hilights/cover.png" />*/}
    </section>
  </section>,
  <ScrollButton
    scrollStepInPx="50"
    delayInMs="16.66"
  />
]
