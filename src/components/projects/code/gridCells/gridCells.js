import React from 'react'

// utils
import { randomIndexOf } from '../../../../utils'


// styles
import './gridCells.css'
//

class GridCells extends React.Component {
  constructor(props) {
    super(props)

    /* initial state */
    this.state = {
      opacities: null,
      rows: null,
      cols: null,
      cellSize: null,
      cellCount: ''
    }
  }

  componentDidMount = () => {
    /* get width and height of the image node */
    const node = this.props.node.current
    const w = node.clientWidth
    const h = node.clientHeight

    /* if less than 500px, cellsize = 50px, */
    /* if greater than 500, cellsize is 100 */
    const cellSize = w < 500
      ? 50
      : 100

    const rows =  Math.round(w / cellSize)
    const cols =  Math.round(h / cellSize)

    this.setState({
      rows,
      cols,
      opacities: this.assignOpacity(rows * cols),
      cellSize: cellSize,
      cellCount: rows * cols
    })

    // this.assignOpacity(this.state.rows * this.state.cols)
    window.addEventListener("resize", this.updateDimensions);
    this.updateCells()
  }

  render = () => {
    // console.log('this.state.opacities', this.state.opacities)
    // console.log('ratio in gridcells', this.props.ratio)
    const support = window.CSS.supports('mix-blend-mode','multiply');
    const mixMe = support ? 'multiply' : ''

    return [
      <div
        className="grid-borders"
        key="grid-borders"
      >
        { this.state.cellCount &&
          this.generateCellBorders(this.state.cellCount)}
      </div>,
      <div
        className="img-grid"
        ref={this.imageGrid}
        key="grid"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(${this.state.cellSize}px, 1fr))`
        }}
      >
        { this.state.opacities &&
          this.generateCells(this.state.opacities, this.props.color, mixMe)
        }
      </div>
    ]
  }

  assignOpacity = (count) => {
    const grid = []
    for (let i = 0; i < count; i++) {
      grid.push(
        Math.random()
      )
    }
    return grid
  }

  generateCells = (opacities, cellColor, mode) =>
    opacities.map((cellOpacity, i) =>
      <div
        key={`cell-${i}`}
        className="cell"
        style={{
          opacity: `${cellOpacity}`,
          backgroundColor: cellColor,
          mixBlendMode: mode
        }}
      />
    )

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
}


export default (GridCells)