import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter';
import reactElementToJSXString from 'react-element-to-jsx-string';

// components
import ImgGrid from '../projects/code/imgGrid/'

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

  getAspectRatio = () => {
    const computeRatio = (ratio) => {
      const w = parseInt(ratio.toString().split("x")[0]) // before x
      const h = parseInt(ratio.toString().split("x")[1]) // after x
      const aspectRatio = w && h
        ? `${((h / w) * 100).toFixed(2)}%`
        : console.log("Incorrect ratio prop")
      return aspectRatio
    }
    const ratio = this.props.ratio && this.props.ratio.length
      ? computeRatio(this.props.ratio)
      : null
    return ratio
  }

  render = () => {
    return (
      <section
        className="project-summary"
      >
        <h1>{`/* ${this.props.title} */`}</h1>
        <p>{this.props.description}</p>
        <div
          className="code-project"
          style={{
            paddingBottom: this.getAspectRatio()
          }}
        >
          <button className="code-toggle"
            onClick={() => this.setState(prevState => ({
              showCode: !prevState.showCode
            }))}
          >code</button>
          { !this.state.showCode
            ? this.props.children
            : <div className="code-pane">
                <SyntaxHighlighter
                  language='javascript'
                  showLineNumbers
                >
                  {reactElementToJSXString(
                    <ImgGrid
                      url='jr-xix/projects/santa-monica'
                      ratio='16x9'
                      duration='.5s'
                      className="rounded bordered"
                      cloudinary
                    />
                  )}
                </SyntaxHighlighter>
              </div>
          }
        </div>
      </section>
    )
  }
}

export default CodeProject;
