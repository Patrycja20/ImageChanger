import React, { Component } from 'react';
import { connect } from 'react-redux';
import helpers from './drawingHelpers';
import './DrawingCanvas.css';
import { setCanvasReference } from '../../actions';
import { DRAW, LINE, RECTANGLE, CIRCLE, TRIANGLE } from '../../reducers/drawingReducer';

export class DrawingCanvas extends Component {

  canvas = null;
  canvasTemp = null;
  ctx = null;
  ctxTemp = null;

  state = {
    canvasSize: { width: 400, height: 300, },
    mouseDown: false,
    startPosition: { x: 0, y: 0 }, // pozycja startowa kursora
  };

  paddings = { // paddingi od krawędzi ekranu
    width: 75 * 2,
    height: 190,
  };

  componentWillMount() {
    this.updateWindowDimensions();
  }

  updateWindowDimensions = () => {
    this.setState({
      canvasSize: helpers.calcCanvasSize(window, this.paddings),
    });
  };

  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.canvasTemp = this.refs.canvasTemp;
    this.props.setCanvasReference(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    this.ctxTemp = this.canvasTemp.getContext('2d');

    helpers.clearCanvas(this.canvas);

    const { paintSize, color } = this.props.drawing;
    helpers.setDefaultContextValues(this.ctx, paintSize, color);
    helpers.setDefaultContextValues(this.ctxTemp, paintSize, color);
  }

  componentDidUpdate() {
    const { paintSize, color } = this.props.drawing;

    this.ctx.lineWidth = paintSize;
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;

    this.ctxTemp.lineWidth = paintSize;
    this.ctxTemp.strokeStyle = color;
    this.ctxTemp.fillStyle = color;
  }

  mouseDown = (e) => {
    const mousePosition = helpers.getRealCoords(this.refs.canvas, e);

    this.setState({
      mouseDown: true,
      startPosition: mousePosition,
    });

    this.ctx.moveTo(mousePosition.x, mousePosition.y);
    this.ctx.beginPath();
  };

  mouseMove = (e) => {
    if (this.state.mouseDown === false) return;

    const { drawMode, isFill } = this.props.drawing;
    const mousePosition = helpers.getRealCoords(this.refs.canvas, e);
    const startPosition = this.state.startPosition;

    this.ctxTemp.clearRect(0, 0, this.refs.canvasTemp.width, this.refs.canvasTemp.height);

    switch (drawMode) {
      case DRAW:
        return helpers.draw(this.ctx, mousePosition);
      case LINE:
        return helpers.drawLine(this.ctxTemp, startPosition, mousePosition);
      case RECTANGLE:
        return helpers.drawRectangle(this.ctxTemp, startPosition, mousePosition, isFill);
      case CIRCLE:
        return helpers.drawCircle(this.ctxTemp, startPosition, mousePosition, isFill);
      case TRIANGLE:
        return helpers.drawTriangle(this.ctxTemp, startPosition, mousePosition, isFill);
    }
  };

  mouseUp = () => {
    this.setState({ mouseDown: false });

    const { drawMode } = this.props.drawing;

    if ([LINE, RECTANGLE, CIRCLE, TRIANGLE].includes(drawMode)) {
      this.ctx.drawImage(this.canvasTemp, 0, 0);
      this.ctxTemp.clearRect(0, 0, this.canvasTemp.width, this.canvasTemp.height);
    }
  };

  render() {
    const { width, height } = this.state.canvasSize;

    return (
      <div className="DrawingCanvas row container-fluid ">
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
          <canvas
            ref="canvasTemp"
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
