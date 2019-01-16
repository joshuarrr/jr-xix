import React from 'react'
import { Head } from 'react-static'

// components
import { Img } from '../components/image-loader'

// images
import profilePic from'../img/Me.jpg';
//

export default () => [
  <Head key="head">
    <title>joshuar(about)</title>
  </Head>,
  <section key="content" className="content">
    {/*<Img name="jr-xix/Me.jpg" />*/}
    <p>Joshua Richey is a user experience designer and front-end developer in Portland, OR, with > 12 years of experience researching, designing, and building websites / applications for humans.</p>
  </section>
]