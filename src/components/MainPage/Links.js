import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import './Links.css';

class Links extends Component {
  render() {
    return (
      <div className="Links d-flex justify-content-around">
        <Row>
          <Col>
            <Link to="/ChangeParameters">
              <button className="changeParameters">Change Parameters</button>
            </Link>
          </Col>
          <Col>
            <Link to="/Filters">
              <button className="filters">Filters</button>
            </Link>
          </Col>
          <Col>
            <Link to="/Drawing">
              <button className="drawing">Drawing</button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Links;
