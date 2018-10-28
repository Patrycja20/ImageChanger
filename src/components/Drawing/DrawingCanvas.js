import React, { Component } from 'react';
import './DrawingCanvas.css'

export default class DrawingCanvas extends Component {
  state = {
    width: 0,
    height: 0
  };

  paddings = {
    width: 75 * 2,
    height: 190,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: (window.innerWidth < 400 + this.paddings.width) ? (400) : (window.innerWidth - this.paddings.width),
      height: (window.innerHeight < 300 + this.paddings.height) ? (300) : (window.innerHeight - this.paddings.height),
    });
  };

  render() {
    const { width, height } = this.state;
    return (
      <div className="row container-fluid ">
        <div className="col canvas-container" ref='container'>
          <canvas ref="canvas" className='canvas-border' width={width} height={height}/>
        </div>
      </div>
    );
  }
}
