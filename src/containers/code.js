import React from 'react'
import { Head } from 'react-static'

// components
import ScrollButton from '../components/scrollToTop/'
import ImgLoad from '../components/projects/code/imgLoad/'
import ImgGrid from '../components/projects/code/imgGrid/'


// utils
import { chooseFrom } from '../utils'

class Code extends React.Component {
  constructor() {
    super()

    // cloudinary images
    const images = [
      'jr-xix/projects/conquer',
      'jr-xix/projects/santa-monica',
      'jr-xix/projects/birds',
    ]

    const image = chooseFrom(images)
    this.state = {
      image
    }
  }

  render = () => {
    // console.log ('this.state.image', this.state.image)
    return [
      <Head key="head">
        <title>joshuar(HTML + CSS + JS)</title>
      </Head>,
      <section key="content-code-projects" className="code projects">
        <section className="project-summary" key="project-grid-thing">
          <h1>/* React Grid Thing */</h1>
          <p>Pretty squares...</p>
          <ImgGrid
            url={this.state.image}
            ratio='16x9'
            duration='.5s'
            className="rounded bordered"
            cloudinary
          />
        </section>
        <section className="project-summary" key="project-imgload">
          <h1>/* ImgLoad */</h1>
          <p>React image loader.</p>
    {/*      <ImgLoad
            images={images}
            ratio='16x9'
            duration='3s'
            className="rounded bordered"
            cloudinary
          />*/}
        </section>
      </section>,
      <ScrollButton
        key="scroll-button"
        scrollStepInPx="50"
        delayInMs="16.66"
      />
    ]
  }
}

export default (Code)