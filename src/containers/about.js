import React from 'react'
import { Head } from 'react-static'

// components
import ImgLoad from '../components/projects/code/imgLoad/'

// images
import profilePic from'../img/Me.jpg';

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
        name="jr-xix/joshua-richey.jpg"
        random={false}
        ratio='1x1'
        duration='3s'
        classes="profile-pic rounded"
        fade
        indicator
        cloudinary
      />
    </div>
    <p className="bio">Joshua Richey is a user experience designer and front-end developer with > 12 years of experience researching, designing, and building websites & applications for humans.</p>
  </section>
]