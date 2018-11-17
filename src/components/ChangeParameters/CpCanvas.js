import React, { Component } from 'react';
import './CpCanvas.css';
import {
  iteratePixels,
  modifyVignetting,
} from './cpModifiers';
import { connect } from 'react-redux';
import { setCanvasReference } from '../../actions';

const SCROLL_WIDTH = 18;

class CpCanvas extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    this.props.setCanvasReference(this.refs.canvas);

    this.ctx = canvas.getContext('2d');
    const img = this.refs.image;

    img.onload = () => {
      this.ctx.clearRect(0, 0, this.props.width, this.props.height);
      this.ctx.drawImage(img, 0, 0);
    }
    //canvas.addEventListener('mousemove', pick);
  }

  /* function pick(event) {
     const x = event.layerX;
     const y = event.layerY;
     const pixel = this.ctx.getImageData(x, y, 1, 1);
     const data = pixel.data;
     const rgba = 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + (data[3] / 255) + ')';
     const color = document.getElementById('PixelColor');
     color.style.background =  rgba;
     color.textContent = rgba;
   }
   */
  componentDidUpdate() {
    if (this.props.parameters.ableToChange === false) return;

    this.ctx.clearRect(0, 0, this.props.width, this.props.height);
    this.ctx.drawImage(this.refs.image, 0, 0);
    if (this.props.parameters.vignetting !== 0) {
      this.ctx.fillStyle = modifyVignetting(this.props.width, this.props.height, this.ctx, this.props.parameters.vignetting);
      this.ctx.fillRect(0, 0, this.props.width, this.props.height);
    }
    const imgData = this.ctx.getImageData(0, 0, this.props.width, this.props.height);
    iteratePixels(this.props.parameters, imgData.data);

    this.ctx.putImageData(imgData, 0, 0);
  }

  render() {
    return (
      <div className="CpCanvas" style={{maxWidth: this.props.width + SCROLL_WIDTH}}>
        <canvas ref="canvas" width={this.props.width} height={this.props.height}/>
        <img ref="image" src={this.props.name} alt="" className="hidden"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    parameters: state.parameters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCanvasReference: (canvasReference) => dispatch(setCanvasReference(canvasReference)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CpCanvas);