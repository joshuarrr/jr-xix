import React from 'react'
import { Head } from 'react-static'

// components
import ScrollButton from '../components/scrollToTop/'
import CodeProject from '../components/codeProject/'
import ImgLoad from '../components/projects/code/imgLoad/'
import ImgGrid from '../components/projects/code/imgGrid/'

// utils
import { chooseFrom } from '../utils'
//


class Code extends React.Component {
  constructor() {
    super()

    // cloudinary images
    const images = [
      'jr-xix/projects/conquer',
      'jr-xix/projects/santa-monica',
      'jr-xix/projects/birds',
    ]

    this.state = {
      image1: chooseFrom(images),
      image2: chooseFrom(images),
    }
  }

  render = () => {
    console.log ('this.state.image', this.state.image1)
    return [
      <Head key="head">
        <title>joshuar(HTML + CSS + JS)</title>
      </Head>,
      <section key="content-code-projects" className="code projects">
        <CodeProject
          title="React Grid Thing"
          description="Pretty squares... (wip)"
          ratio='16x9'
        >
          <ImgGrid
            url={this.state.image1}
            ratio='16x9'
            duration='.5s'
            className="rounded bordered"
            cloudinary
          />
        </CodeProject>
        <section className="project-summary" key="project-imgload">
          <h1>/* ImgLoad */</h1>
          <p>React image loader.</p>
          <ImgLoad
            url={this.state.image2}
            ratio='16x9'
            duration='3s'
            className="rounded bordered"
            cloudinary
          />
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
