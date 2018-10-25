import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import './Links.css';

class Links extends Component {
  render() {
    return (
      <div class="d-flex justify-content-around">
        <Row>
          <Col>
            <Link to="/ChangeParameters">
              <button className="button1">Change Parameters</button>
            </Link>
          </Col>
          <Col>
            <Link to="/Filters">
              <button className="button2">Filters</button>
            </Link>
          </Col>
          <Col>
            <Link to="/Drawing">
              <button className="button3">Drawing</button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Links;
