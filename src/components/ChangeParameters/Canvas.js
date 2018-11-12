import React, { Component } from 'react';
import './Canvas.css';
import {
  iteratePixels,
  modifyBrightness,
  modifyContrast,
  modifySaturation,
  modifySharpness,
  modifynNumberOfShades,
  modifyBlackAndWhite
} from './modifiers';
import connect from 'react-redux/es/connect/connect';

class Canvas extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    this.ctx = canvas.getContext('2d');
    const img = this.refs.image;

    img.onload = () => {
      this.ctx.clearRect(0, 0, 1910, 1080);
      this.ctx.drawImage(img, 0, 0);
    }
  }

  componentDidUpdate() {
    if (this.props.parameters.ableToChange === false) return;

    this.ctx.clearRect(0, 0, 1910, 1080);
    this.ctx.drawImage(this.refs.image, 0, 0);
    const imgData = this.ctx.getImageData(0, 0, 1910, 1080);

    iteratePixels(this.props.parameters.brightness, imgData.data, modifyBrightness);
    iteratePixels(this.props.parameters.contrast, imgData.data, modifyContrast);
    iteratePixels(this.props.parameters.saturation, imgData.data, modifySaturation);
    iteratePixels(this.props.parameters.sharpness, imgData.data, modifySharpness);
    iteratePixels(this.props.parameters.numberOfShades, imgData.data, modifynNumberOfShades);
    iteratePixels(this.props.parameters.blackAndWhite, imgData.data, modifyBlackAndWhite);

    this.ctx.putImageData(imgData, 0, 0);
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

function mapStateToProps(state) {
  return {
    parameters: state.parameters,
  };
}

export default connect(mapStateToProps)(Canvas);