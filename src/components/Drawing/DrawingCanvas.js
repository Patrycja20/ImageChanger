import React, { Component } from 'react';
import { connect } from 'react-redux';
import h from './drawingHelpers';
import './DrawingCanvas.css';
import { saveComplete } from '../../actions';

export class DrawingCanvas extends Component {
  state = {
    width: 400, // rozmiar canvasa
    height: 300, // rozmiar canvasa
    mouseDown: false,
    startX: 0, // pozycja startowa kursora
    startY: 0,
  };

  paddings = {
    width: 75 * 2, // paddingi od krawędzi ekranu
    height: 190,
  };

  componentWillMount() {
    this.updateWindowDimensions();
  }

  updateWindowDimensions = () => {
    this.setState({
      width: (window.innerWidth < 400 + this.paddings.width) ? (400) : (window.innerWidth - this.paddings.width),
      height: (window.innerHeight < 300 + this.paddings.height) ? (300) : (window.innerHeight - this.paddings.height),
    });
  };

  componentDidMount() {
    const canvas = this.refs.canvas;
    console.log('canvas', canvas);
    this.ctx = canvas.getContext('2d');

    this.ctx.lineWidth = this.props.drawing.paintSize;
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = this.props.drawing.color;
  }

  mouseDown = (e) => {
    const mousePosition = h.getRealCoords(this.refs.canvas, e);

    this.setState({
      mouseDown: true,
      startX: mousePosition.x,
      startY: mousePosition.y,
    });

    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);
  };

  mouseMove = (e) => {
    if (!this.state.mouseDown) return;

    const mousePosition = h.getRealCoords(this.refs.canvas, e);
    this.ctx.lineTo(mousePosition.x, mousePosition.y);
    this.ctx.stroke();
  };

  mouseUp = () => {
    this.setState({ mouseDown: false });
  };

  render() {
    const { width, height } = this.state;
    const { drawMode, paintSize, color, saving } = this.props.drawing;

    if (saving) {
      let data = this.refs.canvas.toDataURL('image/jpeg');
      this.props.saveComplete();
      window.open(data, '_blank');
    }

    return (
      <div className="row container-fluid ">
        <div className="col canvas-container" ref='container'>
          <canvas
            ref="canvas"
            className='canvas-border'
            width={width}
            height={height}
            onMouseDown={this.mouseDown}
            onMouseMove={this.mouseMove}
            onMouseUp={this.mouseUp}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    drawing: state.drawing,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveComplete: () => dispatch(saveComplete()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingCanvas);
