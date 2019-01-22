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

class Idealist extends React.Component {
  render = () => [
    <Head key="head">
      <meta charSet="UTF-8" />
      <title>joshuar(design)</title>
    </Head>,
    <section key="idealist-project" className="project idealist">
      <section className="summary">
        <h1>/* Idealist */</h1>
        <p>UX design & frontend engineering for Idealist.org, an international non-profit job board with a social mission to create more good in the world by helping people turn their intentions into actions.</p>
      </section>
      <section className="project-content">
        <section>
          <ImgLoad
            images={["jr-xix/idealist/cover.png"]}
            cloudinary
            ratio="511x289"
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

export default(Idealist)