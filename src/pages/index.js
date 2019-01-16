import React from 'react'
import { Head } from 'react-static'

// components
import { Img } from '../components/image-loader'

// styles
import '../styles/projects.css'
//

export default () =>
  <div className="projects">
    <Head>
      <title>joshuar(product design)</title>
    </Head>
    <section className="summary">
      <h1>/* Hilights */</h1>
      <p>A React Native music collaboration app that facilitates conversations about specific sections of recordings.</p>
      <Img name="jr-xix/hilights/cover.png" />
    </section>

    <section className="summary">
      <h1>/* Lumen Learning */</h1>
      <p>User research, usability testing, and UI wireframes for a LMS (Learning Management System).</p>
      <Img name="jr-xix/lumen/cover.png" />
    </section>

  <section className="summary">
      <h1>/* Idealist */</h1>
      <p>Idealist.org is an international non-profit job board with a social mission to create more good in the world by helping people turn their intentions into actions. I was their Lead Web Designer for five years.</p>
      <Img name="jr-xix/idealist/cover.png" />
    </section>
  </div>
