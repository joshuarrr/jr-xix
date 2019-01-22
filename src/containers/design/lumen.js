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

class Lumen extends React.Component {
  render = () => [
    <Head key="head">
      <meta charSet="UTF-8" />
      <title>joshuar(design)</title>
    </Head>,
    <section key="lumen-project" className="project lumen">
      <section className="summary">
        <h1>/* Lumen */</h1>
        <p>UX design & frontend engineering for Lumen.org, an international non-profit job board with a social mission to create more good in the world by helping people turn their intentions into actions.</p>
      </section>
      <section className="project-content">
        <section>
          <ImgLoad
            images={["jr-xix/lumen/cover.png"]}
            cloudinary
            ratio="511x289"
            className="rounded"
          />
        </section>
        <section>
          <h1>/* app audit */</h1>
          <ImgLoad
            images={["jr-xix/lumen/lumen-audit"]}
            cloudinary
            ratio="16x7"
            className="white rounded"
          />
        </section>
        <section>
          <h1>/* user research */</h1>
          <div className="three-up">
            <div className="three-up-wrapper">
              <ImgLoad
                images={["jr-xix/lumen/lumen-research-01"]}
                cloudinary
                ratio="956x726"
                className="rounded"
              />
            </div>
            <div className="three-up-wrapper">
              <ImgLoad
                images={["jr-xix/lumen/lumen-research-02"]}
                cloudinary
                ratio="956x726"
                className="rounded"
              />
            </div>
            <div className="three-up-wrapper">
              <ImgLoad
                images={["jr-xix/lumen/lumen-research-03"]}
                cloudinary
                ratio="956x726"
                className="rounded"
              />
            </div>
          </div>
        </section>
        <section>
          <h1>/* personas */</h1>
          <ImgLoad
            images={["jr-xix/lumen/lumen-personas-02"]}
            cloudinary
            ratio="502x325"
            className="white rounded"
          />
        </section>
        <section>
          <h1>/* card sorting for IA */</h1>
          <div className="three-up">
            <div className="three-up-wrapper">
              <ImgLoad
                images={["jr-xix/lumen/lumen-card-sorting-01"]}
                cloudinary
                ratio="12x12"
                className="rounded"
              />
            </div>
            <div className="three-up-wrapper">
              <ImgLoad
                images={["jr-xix/lumen/lumen-card-sorting-02"]}
                cloudinary
                ratio="12x12"
                className="rounded"
              />
            </div>
            <div className="three-up-wrapper">
              <ImgLoad
                images={["jr-xix/lumen/lumen-card-sorting-03"]}
                cloudinary
                ratio="12x12"
                className="rounded"
              />
            </div>
          </div>
        </section>
        <section>
          <h1>/* wireframes */</h1>
          <ImgLoad
            images={["jr-xix/lumen/lumen-ac-wireframes"]}
            cloudinary
            ratio="2400x1453"
            className="white rounded"
          />
        </section>
       <section>
          <h1>/* card sorting for IA */</h1>
          <div className="two-up">
            <div className="two-up-wrapper">
              <ImgLoad
                images={["jr-xix/lumen/lumen-ac-02"]}
                cloudinary
                ratio="2880x2936"
                className="rounded"
              />
            </div>
            <div className="two-up-wrapper">
              <ImgLoad
                images={["jr-xix/lumen/lumen-ac-03"]}
                cloudinary
                ratio="2880x2686"
                className="rounded"
              />
            </div>
          </div>
        </section>
        <section>
          <ImgLoad
            images={["jr-xix/lumen/lumen-wireframe-05-preview"]}
            cloudinary
            ratio="2400x1453"
            className="white rounded"
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

export default(Lumen)
