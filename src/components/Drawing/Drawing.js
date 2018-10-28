import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DrawingCanvas from './DrawingCanvas';
import DrawingButtons from './DrawingButtons';
import './Drawing.css';

class Drawing extends Component {
  render() {
    return (
      <div>
        <nav className="navbar-coloring navbar-expand-sm">
          <div className='navbar-coloring-brand'>
            <Link to='/' className='noHover'>
              <span className="raquo-delimeter"> &lsaquo;</span>
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
