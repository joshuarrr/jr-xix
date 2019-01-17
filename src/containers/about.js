import React from 'react'
import { Head } from 'react-static'

// components
import { Img } from '../components/image-loader'

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
    <Img name="jr-xix/joshua-richey.jpg" className="profile-pic"/>
    <p className="bio">Joshua Richey is a user experience designer and front-end developer with > 12 years of experience researching, designing, and building websites & applications for humans.</p>
  </section>
]