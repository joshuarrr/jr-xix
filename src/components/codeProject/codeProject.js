import React from 'react'
import PropTypes from 'prop-types'

// styles
import './code-project.css'
//


class CodeProject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showCode: false
    }
  }

  render = () => {
    return (
      <section className="project-summary" key="project-grid-thing">
        <h1>{`/* ${this.props.title} */`}</h1>
        <p>{this.props.description}</p>
        <button
          className="code-toggle"
          onClick={() => this.setState(prevState => ({
            showCode: !prevState.showCode
          }))}
        >code</button>
        { !this.state.showCode
          ? this.props.children
          : 'some code'
        }
      </section>
    )
  }
}

export default CodeProject;
