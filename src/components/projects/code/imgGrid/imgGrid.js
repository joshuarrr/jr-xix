import React from 'react'
import Palette from 'react-palette'

// components
import ImgLoad from '../imgLoad'

// styles
import './imgGrid.css'
//

/* ImgGrid *//*
  - load an image using imgLoad
  - generate a grid of cells based on the image size
  - color cells based on the image color
  - assign divs random opacities
  - change some random cell opacities on an interval to animate the cells
  */

class ImgGrid extends React.Component {
  constructor(props) {
    super(props)
    this.imageGrid = React.createRef();

    /* initial state */
    this.state = {
      loaded: false,
      imageColor: null,
      imgUrl: this.props.url
    }
  }

  getAspectRatio = () => {
    const computeRatio = (ratio) => {
      const w = parseInt(ratio.toString().split("x")[0]) // before x
      const h = parseInt(ratio.toString().split("x")[1]) // after x
      const aspectRatio = w && h
        ? `${((h / w) * 100).toFixed(2)}%`
        : console.log("Incorrect ratio prop")
      // console.log(aspectRatio)
      return aspectRatio
    }
    // console.log(this.props.ratio)
    const ratio = this.props.ratio && this.props.ratio.length
      ? computeRatio(this.props.ratio)
      : null

      // console.log(`aspect ratio = ${aspectRatio}`)
    return ratio
  }

  getImgColor = (img) =>
    <Palette image={img}>
      {palette => (
        console.log("palette", palette) ||
        <div style={{ color: palette.vibrant }}>
          Text with the vibrant color
        </div>
      )}
    </Palette>

  renderImg = () =>
    <ImgLoad {...this.props}
      hollahBackGurl={imgUrl => {
        console.log("imgUrl??????????", imgUrl)
        this.setState({
          imgUrl
        })
      }}
    />

  render = () => {
    return [
      <div
        className="img-grid-wrapper"
        style={{
          paddingBottom: this.getAspectRatio()
        }}
      >
        {/* Grid */}
        <div
          className="img-grid"
          key="grid"
        >
          {this.state.loaded && this.generateCells()}
        </div>

        {/* Grid Borders */}
        <div
          className="grid-borders"
          key="grid-borders"
        >
          {this.state.loaded && this.generateCells()}
        </div>

        {/* image */}
        {this.renderImg()}
        {this.state.imgUrl && this.getImgColor(this.state.imgUrl)}
      </div>
    ]
  }

  // default props
  static defaultProps = {
    image: null
  }
}

export default (ImgGrid)