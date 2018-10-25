import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditionImage extends Component {
  render() {
    return (
      <div>
        edition
        <br/>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default EditionImage;
