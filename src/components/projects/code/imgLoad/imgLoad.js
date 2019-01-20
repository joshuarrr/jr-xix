import React from 'react'

// cloudinary responsive image component
import { Image } from 'cloudinary-react'

// styles
import './imgLoad.css'

// components
import LoadingIndicator from '../../../loadingIndicator/'

/* ImgLoad *//*
  - get an image from props array
  - set loading text / spinner
  - wait until image loaded successfully
  - set opacity of image when loaded
  - optionally set image aspect ratio

  props:
    images: an array of at least one image
    random: defaults to true - use a random image from an array
    ratio: if provided as #x#, will size the image for stenciling
    fade: defaults to true - fade image opacity of load
    duration: effect duration - defaults to .5s
    className: add a class
    loadingMessage: display a message while loading
    indicator: display a component while loading
    controls:  show controls to adjust props
    cloudinary: use cloudinary component instead of img
  */
//

class ImgLoad extends React.Component {
  constructor(props) {
    super(props)
    /* return a random number from an array */
    const randomIndexOf = (arr) => Math.floor(Math.random() * arr.length)
    /* return an item from an array */
    const chooseFrom = (arr) => arr[randomIndexOf(arr)]
    /* return random image url from images array if props.random = true */
    const img = props.random === true
      ? chooseFrom(props.images)
      : this.props.images[0]
    /* initial state */
    this.state = {
      loaded: false,
      imgUrl: img,
    }
  }

  loadImage = () => new Promise( (resolve, reject) => {
      console.log('Loading...')
      const img = new Image()
      /* resolve promise on load */
      img.onload = () => {
        resolve(img) // return the image element
      }
      /* reject promise on not load */
      img.onerror = () => {
        reject()
      }
      /* image to load */
      img.src = this.state.imgUrl
      // console.log(`img.src = ${this.state.imgUrl}`)
    })

  componentDidMount = () => {
    // console.log( this.loadImage())
    /* If not using cloudinary, call loadImage */
    /* loadImage promise success */
    if (!this.props.cloudinary) {
      console.log('...not cloudinary...')
      this.loadImage().then(() => {
        console.log('Loaded.')
        this.setState({
          loaded: true
        })
      /* loadImage promise failure */
      }, (error) => {
        console.log('Loading failed.', error)
        this.setState({loaded: false});
      });
    }

  }

  getAspectRatio = () => {
    const ratio = this.props.ratio
    const w = parseInt(ratio.toString().split("x")[0]) // before x
    const h = parseInt(ratio.toString().split("x")[1]) // after x
    const aspectRatio = w && h
      ? `${Math.floor(((h / w) * 100).toFixed(2))}%`
      : console.log("Incorrect ratio prop")
      // console.log(`aspect ratio = ${aspectRatio}`)
    return aspectRatio
  }

  render = () => {
    // console.log(this.state)
    const imgStyles = this.props.fade
      ? {
        opacity: this.state.loaded ? '1' : '0',
        transition: `opacity ${this.props.duration} ease-in-out`
      }
      : null

    const showLoadingIndicator = !this.state.loaded && this.props.indicator
      ? <LoadingIndicator />
      : null

    const showLoadingMessage = this.props.loadingMessage
       ? !this.state.loaded
         ? <p className="loading-message">{this.props.loadingMessage}</p>
         : null
       : null

      const showControls = this.props.showControls &&
        <div className="image-loader-controls">
          <button onClick={this.reloadImage}>
            rerender
          </button>
        </div>

      const imageLoad = () => {
        this.setState({
          loaded: true
        })
      }

    /* if cloudinary prop is true, use the cloudinary component... */
    const showImage = this.props.cloudinary
      ? <Image
          className={`cloudinary image ${this.props.classes}`}
          cloudName="joshuar"
          publicId={this.state.imgUrl}
          width="auto"
          dpr="auto"
          crop="scale"
          progressive="false"
          f_auto="true"
          secure
          responsive
          onLoad={() => {
            console.log('Loaded Cloudinary')
            imageLoad()
          }}
          style={imgStyles}
        />
      : <img
          alt=""
          src={this.state.imgUrl}
          className="image"
          style={imgStyles}
        />

    return (
      <div
        className={`image-loader ${this.props.classes}`}
        key="image-loader"
        style={{
          paddingBottom: this.getAspectRatio()
        }}
      >
        {showLoadingIndicator}
        {showLoadingMessage}
        {showImage}
        {showControls}
        }
      </div>
    )
  }

  // default props
  static defaultProps = {
    images: [],
    random: false,
    ratio: null,
    fade: true,
    duration: '.5s',
    classes: '',
    indicator: true,
    loadingMessage: null,
    controls: false,
    cloudinary: false,
  }
}

export default (ImgLoad)