import React from 'react'


//

/* ImgGrid *//*
  - get a random image from array
  - set loading text
  - use a promise to make sure image loaded successfully
  - set opacity of image when loaded to fade it in gracefully
  - generate a grid of cells based on the window size
  - color cells based on the image color
  - assign divs random opacities
  - change some random cell opacities on an interval to animate the cells
  */
class ImgGrid extends React.Component {
  constructor(props) {
    super(props)
    const cols = Math.round(window.innerWidth / 100)
    const rows = Math.round(window.innerHeight / 100)

    /* Randomly assign classes to the grid cells */
    const assignOpacity = (count) => {
      const grid = []
      for (let i = 0; i < count; i++) {
        grid.push(
          Math.random()
        )
      }
      return grid
    }

    const imagesToLoad = this.props.imageSet

    /* Return a random number from an array */
    const randomIndexOf = (arr) => Math.floor(Math.random() * arr.length)

    /* Return an item from an array */
    const chooseFrom = (arr) =>
      arr[randomIndexOf(arr)]

    /* Return random image url from images array */
    const imgUrl = chooseFrom(imagesToLoad)
    console.log(`imgUrl = ${imgUrl}`)

    /* initial state */
    this.state = {
      cols,
      rows,
      opacities: assignOpacity(cols * rows),
      loaded: false,
      imageColor: null,
      imgUrl
    }
  }

  /* Return a promise that resolves if the image loaded */
  loadImage = () => {
    let promise = new Promise( (resolve, reject) => {
      console.log('Loading...');
      const img = new Image()
      /* cross-origin fix: */
      img.setAttribute('crossOrigin', 'anonymous');
      // img.crossOrigin = 'anonymous';

      /* Resolve promise on load */
      img.onload = () => {
        resolve(img) // return the image element
      }
      /* Reject promise on not load */
      img.onerror = () => {
        reject()
      }
      /* Image to load */
      img.src = this.state.imgUrl
      // console.log(`src = ${this.state.imgUrl}`)
    });
    return promise;
  }

  /* Generate grid cells */
  generateCells = (opacities, cellColor) =>
    opacities.map((cellOpacity, i) =>
      <div
        key={`cell-${i}`}
        className="cell"
        style={{
          opacity: `${cellOpacity}`,
          backgroundColor: cellColor,
          mixBlendMode: this.mixMe
        }}
      />
    )


  /* Generate grid-border cells */
  generateCellBorders = (count) => {
    const borders = []
    for (let i = 0; i < count; i++) {
      borders.push(
        <div
          key={`cell-${i}`}
          className="cell"
        />
      )
    }
    return borders
  }

  updateCells = () => {
    /* Generate a grid of cells  */
    this.interval = setInterval(() => {
      // * Get the current array of opacities
      const updatedCells = this.state.opacities
      const numberToChange = 10
     /* get a random integer */
      const randomOpacity = () => {
        // console.log(Math.floor(Math.random() * 11))
        return Math.floor(Math.random() * 11)
      }
      for (let i = 0; i < numberToChange; i++) {
       // * generate a random index number from the array
        const randomIndex = randomIndexOf(this.state.opacities)
        // assign opacities
        updatedCells[randomIndex] = `.${randomOpacity()}`
      }
      // * Set state with the updated array
      this.setState({
        opacities: updatedCells
      })
    }, 1000);
  }

  updateDimensions = () => {
    const cols = Math.round(window.innerWidth / 100)
    const rows = Math.round(window.innerHeight / 100)
    // console.log(`columns = ${cols}`)
    // console.log(`rows = ${rows}`)
    // console.log(assignOpacity(cols * rows))

    this.setState({
      cols,
      rows,
      opacities: assignOpacity(cols * rows)
    });
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
    // console.log(`this.state.cols = ${this.state.cols}`)

    /* loadImage promise success */
    this.loadImage().then( img => {
      console.log('Loaded.')
      // console.log(img)
      const colorThief = new ColorThief()
      const rgb = colorThief.getColor(img)
      const rgbColor = `rgb(${rgb.join(', ')})`
      // console.log(rgbColor)
      this.setState({
        imageColor: rgbColor
      });

    /* loadImage promise failure */
    }, (error) => {
      console.log('Loading failed.', error)
      this.setState({loaded: false});
    });

    this.updateCells()
  }

  render = () => {
    const support = window.CSS.supports('mix-blend-mode','multiply');
    const mixMe = support ? 'multiply' : ''
    // console.log('render state:', this.state)
    const cellSize = window.innerWidth / this.state.cols
    // console.log(`cell size = ${cellSize}`)
    const cellCount = this.state.cols * this.state.rows
    // console.log(`this.state.imageColor: ${this.state.imageColor}`)
    return [
      /* Grid */
      <div
        className="grid"
        key="grid"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${cellSize}px, 1fr))`
        }}
      >
        { this.state.loaded ?
          this.generateCells(this.state.opacities, this.state.imageColor)
          : <p className="loading-text">Loading......</p>
        }
      </div>,
      /* Grid Borders */
      <div
        className="grid-borders"
        key="grid-borders"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${cellSize}px, 1fr))`
        }}
      >
        {this.generateCellBorders(cellCount)}
      </div>,
      <div
        className="image-loader"
        key="image-loader"
        style={{backgroundColor: this.state.imageColor}}
      >
      <img
        src={this.state.imgUrl}
        className="image"
        style={
          this.state.loaded
            ? {opacity: '1'}
            : {}
        }
        onLoad={
          () => this.setState({
            loaded: true
          })
        }
      />
      </div>
    ]
  }
}


/* Render */
// ReactDOM.render(<App />, document.getElementById('root'))

export default (ImgGrid)