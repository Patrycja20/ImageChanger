import React, { Component } from 'react';
import './Canvas.css';

class Canvas extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      ctx.font = "40px Leelawadee"
      ctx.fillText(this.props.text, 210, 75)
    }
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={1910} height={1080}/>
        <img ref="image" src={this.props.name} className="hidden" />
      </div>
    )
  }
}

export default Canvas;