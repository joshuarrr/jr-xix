import React from 'react'
import { Head } from 'react-static'

// components
// import { Img } from '../components/image-loader'
import ImgLoad from '../components/projects/code/imgLoad/'


// images
import profilePic from'../img/Me.jpg';
const images = [
  'https://res.cloudinary.com/joshuar/image/upload/v1547701688/jr-xix/joshua-richey.jpg',
]

// styles
import'../styles/about.css'
//

export default () => [
  <Head key="head">
    <title>joshuar(about)</title>
  </Head>,
  <section key="content" className="about content">
    <div className="profile-pic-wrapper">
      <ImgLoad
        images={images}
        name="jr-xix/joshua-richey.jpg"
        random={false}
        ratio='1x1'
        duration='3s'
        fade={true}
        classes="profile-pic rounded"
        indicator
        cloudinary
      />
    </div>
    <p className="bio">Joshua Richey is a user experience designer and front-end developer with > 12 years of experience researching, designing, and building websites & applications for humans.</p>
  </section>
]