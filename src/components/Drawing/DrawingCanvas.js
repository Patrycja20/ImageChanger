import React, { Component } from 'react';
import { connect } from 'react-redux';
import h from './drawingHelpers';
import './DrawingCanvas.css';
import { setCanvasReference } from '../../actions';

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
    this.props.setCanvasReference(canvas);

    this.ctx = canvas.getContext('2d');
    this.ctx.lineWidth = this.props.drawing.paintSize;
    this.ctx.strokeStyle = this.props.drawing.color;
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
  }

  componentDidUpdate() {
    const { paintSize, color } = this.props.drawing;

    this.ctx.lineWidth = paintSize;
    this.ctx.strokeStyle = color;
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
    setCanvasReference: (ref) => dispatch(setCanvasReference(ref)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingCanvas);
