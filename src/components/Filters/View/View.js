import React, { Component } from 'react';
import {Col} from 'reactstrap';
import { Link } from 'react-router-dom';

class View extends Component {
  render() {
    return <div className="Title2">
      <Col>
        <h2>
          <Link className="Back2" to="/Filters">&lt;</Link>
          Filters -> View
        </h2>
      </Col>
    </div>
  }
}

export default View;