import React from 'react'

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
  */
//

class ImgLoad extends React.Component {
  constructor(props) {
    super(props)

    // console.log(`* constructor * \n \t random = ${props.random}`)

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
      imgUrl: img
    }
  }

  loadImage = () => {
  /* return a promise that resolves if the image loaded */
    let promise = new Promise( (resolve, reject) => {
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
    })
    return promise;
  }

  componentDidMount = () => {
    /* loadImage promise success */
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

getAspectRatio = () => {
  const ratio = this.props.ratio
  const w = ratio.toString().split("x")[0] // before x
  const h = ratio.toString().split("x")[1] // after x
  const aspectRatio = w && h
    ? `${((h / w) * 100).toFixed(2)}px`
    : console.log("Incorrect ratio prop")
    // console.log(`aspect ratio = ${aspectRatio}`)
  return aspectRatio
}

  render = () => {
    const imgStyles = this.props.fade
      ? {
        opacity: this.state.loaded ? '1' : '0',
        borderBottom: this.getAspectRatio(),
        transition: `opacity ${this.props.duration} ease-in-out`
      }
      : null

    const showLoadingIndicator = this.state.loaded
      ? null
      : <LoadingIndicator />

    const showLoadingMessage = this.props.loadingMessage
      ? !this.state.loaded
        ? <p className="loading-message">{this.props.loadingMessage}</p>
        : null
      : null

    // console.log(`* Render *`)
    // console.log('this.props = ', this.props)

    return (
      <div
        className={`image-loader ${this.props.classes}`}
        key="image-loader"
        style={{
        }}
      >
        {showLoadingIndicator}
        {showLoadingMessage}
        <img
          alt=""
          src={this.state.imgUrl}
          className="image"
          style={imgStyles}
        />
      </div>
    )
  }

  // default props
  static defaultProps = {
    images: [],
    random: true,
    ratio: null,
    fade: true,
    duration: '.5s',
    classes: '',
    indicator: true,
    loadingMessage: null
  }
}

export default (ImgLoad)