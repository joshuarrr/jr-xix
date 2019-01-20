import React from 'react'
import { Head } from 'react-static'

// components
import ScrollButton from '../components/scrollToTop/'
import ImgLoad from '../components/projects/code/imgLoad/'
import ImgGrid from '../components/projects/code/imgGrid/'

/* Images */
// const images = [
//   'https://res.cloudinary.com/joshuar/image/upload/v1469498163/photos/conquer.jpg',
//   'https://res.cloudinary.com/joshuar/image/upload/v1547752938/jr-xix/projects/nature.jpg',
//   'https://res.cloudinary.com/joshuar/image/upload/v1546970122/photos/aerial-01.jpg',
// ]

// cloudinary images
const images = [
  'photos/conquer.jpg',
  'jr-xix/projects/nature.jpg',
  'photos/aerial-01.jpg',
]
//

export default () => [
  <Head key="head">
    <title>joshuar(HTML + CSS + JS)</title>
  </Head>,
  <section key="content" className="code projects">
    <section className="project-summary">
      <h1>/* React Grid Thing */</h1>
      <p>Pretty squares.</p>
      <ImgGrid
        images={images}
        ratio='16x9'
        duration='3s'
        classes="rounded"
        cloudinary
        random
      />
    </section>
    <section className="project-summary">
      <h1>/* ImgLoad */</h1>
      <p>React image loader.</p>
      <ImgLoad
        images={images}
        ratio='16x9'
        duration='3s'
        classes="rounded"
        cloudinary
        random
      />
    </section>
  </section>,
  <ScrollButton
    key="scroll-button"
    scrollStepInPx="50"
    delayInMs="16.66"
  />
]
