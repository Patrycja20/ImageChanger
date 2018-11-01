import React, { Component } from 'react';
import { connect } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPencilAlt,
  faMinus,
  faCircle,
  faSquare,
  faCaretUp,
  faVectorSquare,
  faSquareFull
} from '@fortawesome/free-solid-svg-icons'

import { CIRCLE, DRAW, LINE, RECTANGLE, TRIANGLE } from '../../reducers/drawingReducer';
import { changeFillMode, setColor, setDrawMode, setPaintSize } from '../../actions/index';
import helpers from './drawingHelpers';
import './DrawingButtons.css'

library.add(faPencilAlt);
library.add(faMinus);
library.add(faCircle);
library.add(faSquare);
library.add(faCaretUp);
library.add(faVectorSquare);
library.add(faSquareFull);


export class DrawingButtons extends Component {
  changeDrawMode = (mode) => {
    this.props.setDrawMode(mode);
  };

  changePaintSize = (e) => {
    this.props.setPaintSize(e.target.value);
  };

  changeColor = (e) => {
    this.props.setColor(e.target.value);
  };

  changeFillMode = () => {
    this.props.changeFillMode();
  };

  saveAsJpg = () => {
    helpers.canvasDownloadPopup(this.props.drawing.canvasRef);
  };

  render() {
    const { drawMode, paintSize, color, isFill } = this.props.drawing;

    return (
      <div className='navbar-coloring-buttons'>
        <ul className="navbar-nav mr-auto paint-bar">
          <li className="nav-item paint-size-container">
            <input
              id="paintSize"
              type="range"
              className="form-control-range paint-size"
              min="1"
              max="50"
              value={paintSize} onChange={this.changePaintSize}
              title='Choose color'
            />
            <span className="badge badge-secondary paint-size-val">{paintSize}px</span>
          </li>

          <li className="nav-item">
            <input type="color" className="btn btn-secondary paint-color" value={color} onChange={this.changeColor}/>
          </li>

          <li className="nav-item">
            <button
              className={`btn btn-secondary`}
              type="button"
              onClick={this.changeFillMode}
              title='Fill or stroke mode'
            >
              {
                isFill
                  ? (<FontAwesomeIcon icon="square-full"/>)
                  : (<FontAwesomeIcon icon="vector-square"/>)
              }
            </button>
          </li>

          <li className="nav-item">
            <button
              data-mode={DRAW}
              className={`btn btn-secondary button-mode ${drawMode === DRAW && 'selected'}`}
              type="button"
              onClick={() => this.changeDrawMode(DRAW)}
              title='Draw'
            >
              <FontAwesomeIcon icon="pencil-alt"/>
            </button>

            <button
              data-mode={LINE}
              className={`btn btn-secondary button-mode ${drawMode === LINE && 'selected'}`}
              type="button"
              onClick={() => this.changeDrawMode(LINE)}
              title='Draw line'
            >
              <FontAwesomeIcon icon="minus"/>
            </button>

            <button
              data-mode={RECTANGLE}
              className={`btn btn-secondary button-mode button-square ${drawMode === RECTANGLE && 'selected'}`}
              type="button"
              onClick={() => this.changeDrawMode(RECTANGLE)}
              title='Draw rectangle'
            >
              <FontAwesomeIcon icon="square"/>
            </button>

            <button
              data-mode={RECTANGLE}
              className={`btn btn-secondary button-mode button-square ${drawMode === CIRCLE && 'selected'}`}
              type="button"
              onClick={() => this.changeDrawMode(CIRCLE)}
              title='Draw circle'
            >
              <FontAwesomeIcon icon="circle"/>
            </button>

            <button
              data-mode={RECTANGLE}
              className={`btn btn-secondary button-mode button-square ${drawMode === TRIANGLE && 'selected'}`}
              type="button"
              onClick={() => this.changeDrawMode(TRIANGLE)}
              title='Draw triangle'
            >
              <FontAwesomeIcon className='triangle-icon' icon="caret-up"/>
            </button>
          </li>

          <li className='nav-item button-save'>
            <button type="button" className="btn btn-secondary" onClick={this.saveAsJpg}>Save as *.jpg</button>
          </li>

        </ul>
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
    setDrawMode: (drawMode) => dispatch(setDrawMode(drawMode)),
    setPaintSize: (paintSize) => dispatch(setPaintSize(paintSize)),
    setColor: (color) => dispatch(setColor(color)),
    changeFillMode: () => dispatch(changeFillMode()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawingButtons);
