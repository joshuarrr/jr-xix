import React from 'react'

// components
import SocialLinks from '../socialLinks/'
import ScrollButton from '../scrollToTop/'

// styles
import './footer.css'
//

export default () => {
  return (
    <footer className="footer">
      <ScrollButton
        scrollStepInPx="50"
        delayInMs="16.66"
      />
      <SocialLinks />
    </footer>
  )
}