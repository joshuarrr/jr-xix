import React from 'react'
import { Head } from 'react-static'

// components
import ScrollButton from '../components/scrollToTop/'

// projects
import ImgLoad from '../components/projects/code/imgLoad/'

/* Images */
const images = [
  'https://res.cloudinary.com/joshuar/image/upload/v1469498163/photos/conquer.jpg',
  'https://res.cloudinary.com/joshuar/image/upload/v1547752938/jr-xix/projects/nature.jpg',
  'https://res.cloudinary.com/joshuar/image/upload/v1546970122/photos/aerial-01.jpg',
]
//

export default () => [
  <Head key="head">
    <title>joshuar(HTML + CSS + JS)</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.0.1/color-thief.min.js" />
  </Head>,
  <section key="content" className="code projects">
    <section className="project-summary">
      <h1>/* ImgLoad */</h1>
      <p>React random image loader.</p>
      <ImgLoad
        images={images}
        random={false}
        ratio='16x9'
        duration='3s'
        fade={true}
        classes="rounded"
        indicator={true}
        loadingMessage={false} // or string e.g: 'loading...'
        showControls
      />
    </section>
  </section>,
  <ScrollButton
    key="scroll-button"
    scrollStepInPx="50"
    delayInMs="16.66"
  />
]
