import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faMinus, } from '@fortawesome/free-solid-svg-icons'
import './DrawingButtons.css'

library.add(faPencilAlt);
library.add(faMinus);

export const DRAW = 'draw';
export const LINE = 'line';
export const RECTANGLE = 'rectangle';

export default class DrawingButtons extends Component {
  state = {
    drawMode: DRAW,
    paintSize: 10,
    color: '#6edb31',
  };

  changeDrawMode = (mode) => {
    this.setState({ drawMode: mode })
  };

  changePaintSize = (e) => {
    this.setState({ paintSize: e.target.value })
  };

  changeColor = (e) => {
    this.setState({ color: e.target.value })
  };

  render() {
    const { drawMode, paintSize, color } = this.state;

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
            />
            <span className="badge badge-secondary paint-size-val">{paintSize}px</span>
          </li>

          <li className="nav-item">
            <input type="color" className="btn btn-secondary paint-color" value={color} onChange={this.changeColor}/>
          </li>

          <li className="nav-item">
            <button
              data-mode={DRAW}
              className={`btn btn-secondary button-mode ${drawMode === DRAW && 'selected'}`}
              type="button"
              onClick={() => this.changeDrawMode(DRAW)}
            >
              <FontAwesomeIcon icon="pencil-alt"/>
            </button>

            <button
              data-mode={LINE}
              className={`btn btn-secondary button-mode ${drawMode === LINE && 'selected'}`}
              type="button"
              onClick={() => this.changeDrawMode(LINE)}
            >
              <FontAwesomeIcon icon="minus"/>
            </button>

            <button
              data-mode={RECTANGLE}
              className={`btn btn-secondary button-mode button-square ${drawMode === RECTANGLE && 'selected'}`}
              type="button"
              onClick={() => this.changeDrawMode(RECTANGLE)}
            >
              <span> &#9634;</span>
            </button>
          </li>

          <li className='nav-item button-save'>
            <button type="button" className="btn btn-secondary">Save as *.jpg</button>
          </li>

        </ul>
      </div>
    );
  }
}