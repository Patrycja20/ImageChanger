import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChangeParameters extends Component {
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

export default ChangeParameters;
