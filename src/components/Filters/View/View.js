import React, { Component } from 'react';
import {Col} from 'reactstrap';
import { Link } from 'react-router-dom';

class View extends Component {
  render() {
    return <div className="Filters">
      <Col>
        <h2>
          <Link className="Back" to="/Filters">&lt;</Link>
          Filters -> View
        </h2>
      </Col>
    </div>
  }
}

export default View;