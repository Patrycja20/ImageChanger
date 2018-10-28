import React, { Component } from 'react';
import './Canvas.css';

class Canvas extends Component {

  componentDidMount() {
    let canvas = this.refs.canvas;
    let ctx = canvas.getContext("2d");
    let img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    }
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={1910} height={1080}/>
        <img ref="image" src={this.props.name} className="hidden"/>
      </div>
    )
  }
}

export default Canvas;