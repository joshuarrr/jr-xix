import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
//

class ResponsiveGrid extends Component {

  render = () => [
    <MediaQuery key="mobile" query="(max-width: 1024px)">
      <div className="mobile">
        {this.props.children}
      </div>
    </MediaQuery>,
    <MediaQuery key="desktop" query="(min-width: 1025px)">
      <div className="desktop grid">
        {this.props.children}
      </div>
    </MediaQuery>
  ]
}

export default (ResponsiveGrid)
