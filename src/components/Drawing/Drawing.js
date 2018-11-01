import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DrawingCanvas from './DrawingCanvas';
import DrawingButtons from './DrawingButtons';
import './Drawing.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft);

class Drawing extends Component {
  render() {
    return (
      <div>
        <nav className="navbar-coloring navbar-expand-sm">
          <div className='navbar-coloring-brand'>
            <Link to='/' className='noHover'>
              <span className="raquo-delimeter"><FontAwesomeIcon icon="angle-left"/></span>
              <span className="navbar-brand">Drawing</span>
            </Link>
          </div>
          <DrawingButtons/>
        </nav>
        <DrawingCanvas/>
      </div>
    );
  }
}

export default Drawing;
