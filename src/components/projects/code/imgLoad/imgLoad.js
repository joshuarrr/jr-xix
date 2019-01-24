import React from 'react'
import { Image } from 'cloudinary-react'

// utils
import { chooseFrom } from '../../../../utils'

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
    image: a url
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

    /* initial state */
    this.state = {
      loaded: false,
      imgUrl: this.props.url,
    }
  }

  loadImage = () => new Promise( (resolve, reject) => {
      // console.log('Loading...')
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
      // console.log('...not cloudinary...')
      this.loadImage().then(() => {
        // console.log('Loaded.')
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

  render = () => {
      // console.log(`imgload props: `)
      // console.log(this.props)

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

      // console.log(this.state.imgUrl)

    /* if cloudinary prop is true, use the cloudinary component... */
    const showImage = this.props.cloudinary
      ? <Image
          className={`cloudinary image ${this.props.className}`}
          cloudName="joshuar"
          publicId={this.state.imgUrl}
          width="auto"
          dpr="auto"
          crop="scale"
          progressive="false"
          f_auto="true"
          secure
          responsive
          onLoad={event => {
            // let parent know the image loaded and send back the url
            if (this.props.imgLoaded) {
              this.props.imgLoaded(event.currentTarget.src)
            }
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
        className={`image-loader ${this.props.className}`}
        key="image-loader"
        style={{
          paddingBottom: this.getAspectRatio()
        }}
      >
        {showLoadingIndicator}
        {showLoadingMessage}
        {showImage}
        {showControls}
      </div>
    )
  }

  // default props
  static defaultProps = {
    images: [],
    ratio: null,
    fade: true,
    duration: '.5s',
    className: '',
    indicator: true,
    loadingMessage: null,
    controls: false,
    cloudinary: true,
  }
}

export default React.forwardRef((props, ref) => <ImgLoad {...props} imgRef={ref}/>)
