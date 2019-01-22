import React from 'react'
import { Head } from 'react-static'
import { Link } from "@reach/router"

// components
import ImgLoad from '../../components/projects/code/imgLoad/'
// import { Img } from '../components/image-loader'
import ScrollButton from '../../components/scrollToTop/'

// styles
import '../../styles/project.css'
//

class Hilights extends React.Component {
  render = () => [
    <Head key="head">
      <meta charSet="UTF-8" />
      <title>joshuar(design)</title>
    </Head>,
    <section key="hilights-project" className="project hilights">
      <section className="summary">
        <h1>/* Hilights */</h1>
        <p>Product design for a music collaboration app that facilitates conversations around specific sections of recordings.</p>
      </section>
      <section className="project-content">
        <section>
          <ImgLoad
            images={["jr-xix/hilights/cover.png"]}
            cloudinary
            ratio="511x289"
          />
        </section>
        <section>
          <h1>/* wireframes */</h1>
          <ImgLoad
            images={["jr-xix/hilights/hilights-wireframe-sketches.jpg"]}
            cloudinary
            ratio="26x11"
            className="rounded"
          />
        </section>
        <section>
          <h1>/* mobile sitemap */</h1>
          <ImgLoad
            images={["jr-xix/hilights/hilights-sitemap-mobile.jpg"]}
            cloudinary
            ratio="8x5"
            className="rounded"
          />
        </section>
        <section>
          <h1>/* desktop sitemap */</h1>
          <ImgLoad
            images={["jr-xix/hilights/hilights-sitemap-desktop.jpg"]}
            cloudinary
            ratio="8x5"
            className="rounded"
          />
        </section>
        <section>
          <h1>/* mobile wireframes */</h1>
          <ImgLoad
            images={["jr-xix/hilights/hilights-wireframes-mobile"]}
            cloudinary
            ratio="900x683"
          />
        </section>
        <section>
          <h1>/* desktop wireframe prototype */</h1>
          <ImgLoad
            images={["jr-xix/hilights/hilights-wireframe-prototype-desktop"]}
            cloudinary
            ratio="8x5"
            className="rounded"
          />
        </section>
        <section>
          <h1>/* mobile comp */</h1>
          <ImgLoad
            images={["jr-xix/hilights/hilights-mobile"]}
            cloudinary
            ratio="2101x1500"
            className="rounded"
          />
        </section>
        <section>
          <h1>/* desktop comps */</h1>
          <ImgLoad
            images={["jr-xix/hilights/hilights-macbook"]}
            cloudinary
            ratio="2101x1700"
            className="rounded"
          />
          <ImgLoad
            images={["jr-xix/hilights/hilights-imac"]}
            cloudinary
            ratio="2101x1700"
            className="rounded"
          />
        </section>
      </section>
      <Link to="../../" href="/" className="back-link">back</Link>
    </section>,
    <ScrollButton
      key="scroll-button"
      scrollStepInPx="80"
      delayInMs="16.66"
    />
  ]
}

export default(Hilights)