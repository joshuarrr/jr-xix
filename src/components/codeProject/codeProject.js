import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter';

// components
import ImgGrid from '../projects/code/imgGrid/'

// styles
import './code-project.css'
//




class CodeProject extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showCode: false,
      error: null,
      isLoaded: false,
      text: ''
    }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/joshuarrr/jr-xix/master/src/components/projects/code/imgGrid/imgGrid.js")
      .then(res => res.text())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            text: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render = () => {
    const { error, isLoaded, text } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      const codeText = 'Loading...'
    } else {
      const codeText = text
    }

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
                    {this.state.text}
                  </SyntaxHighlighter>
              </div>
          }
        </div>
      </section>
    )
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
}

export default CodeProject;
