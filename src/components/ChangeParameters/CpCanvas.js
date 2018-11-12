import React, { Component } from 'react';
import './CpCanvas.css';
import {
  iteratePixels,
  modifyVignetting,
} from './cpModifiers';
import connect from 'react-redux/es/connect/connect';

class CpCanvas extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    this.ctx = canvas.getContext('2d');
    const img = this.refs.image;

    img.onload = () => {
      this.ctx.clearRect(0, 0, this.props.width, this.props.height);
      this.ctx.drawImage(img, 0, 0);
    }
  }

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
      <div>
        <canvas ref="canvas" width={this.props.width} height={this.props.height}/>
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

export default connect(mapStateToProps)(CpCanvas);