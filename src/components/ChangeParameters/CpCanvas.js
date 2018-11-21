import React, { Component } from 'react';
import './CpCanvas.css';
import {
  iteratePixels,
  modifyVignetting,
} from './cpModifiers';
import { connect } from 'react-redux';
import { setCanvasReference } from '../../actions';
import { getDivDimensions } from './cpHelpers';

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

    const {
      imageSize: { width: imageWidth, height: imageHeight },
      parameters,
    } = this.props;

    this.ctx.clearRect(0, 0, imageWidth, imageHeight);
    this.ctx.drawImage(this.refs.image, 0, 0);
    if (parameters.vignetting !== 0) {
      this.ctx.fillStyle = modifyVignetting(imageWidth, imageHeight, this.ctx, parameters.vignetting);
      this.ctx.fillRect(0, 0, imageWidth, imageHeight);
    }
    const imgData = this.ctx.getImageData(0, 0, imageWidth, imageHeight);
    iteratePixels(parameters, imgData.data);

    this.ctx.putImageData(imgData, 0, 0);
  }

  render() {
    const {
      imageSize: { width: imageWidth, height: imageHeight },
      imageSize,
      containerSize,
      name
    } = this.props;

    const {divWidth, divHeight} = getDivDimensions(imageSize, containerSize);

    return (
      <div className="CpCanvas" style={{ maxWidth: divWidth, maxHeight: divHeight}}>
        <canvas ref="canvas" width={imageWidth} height={imageHeight}/>
        <img ref="image" src={name} alt="" className="hidden"/>
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