import React from 'react'
import { Head } from 'react-static'

// components
import ImgLoad from '../components/projects/code/imgLoad/'
// import { Img } from '../components/image-loader'
import ScrollButton from '../components/scrollToTop/'

// styles
import '../styles/projects.css'
//

export default () => [
  <Head key="head">
    <title>joshuar(product design)</title>
  </Head>,

  <section key="design-projects" className="design projects">
    <section className="project-summary">
      <h1>/* Hilights */</h1>
      <p>Product design for a music collaboration app that facilitates conversations around specific sections of recordings.</p>
      <div className="project-cover">
        <ImgLoad
          images={["jr-xix/hilights/cover.png"]}
          cloudinary
          ratio="511x289"
        />
      </div>
    </section>

    <section className="project-summary">
      <h1>/* Lumen Learning */</h1>
      <p>User research, usability testing, and UI wireframes for a LMS (Learning Management System) that provides open source textbooks.</p>
      <div className="project-cover">
        <ImgLoad
          images={["jr-xix/lumen/cover.png"]}
          cloudinary
          ratio="900x564"
          className="rounded"
        />
      </div>
    </section>

    <section className="project-summary">
      <h1>/* Idealist */</h1>
      <p>UX design & frontend engineering for Idealist.org, an international non-profit job board with a social mission to create more good in the world by helping people turn their intentions into actions.</p>
      <div className="project-cover">
        <ImgLoad
          images={["jr-xix/idealist/cover.png"]}
          cloudinary
          ratio="900x646"
        />
      </div>
    </section>
  </section>,

  <ScrollButton
    key="scroll-button"
    scrollStepInPx="80"
    delayInMs="16.66"
  />
]
