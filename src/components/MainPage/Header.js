import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './HeaderFooter.css';

class Header extends Component {
  render() {
    return (
      <Row className="header">
        <Col>
          <h1>Image Changer</h1>
        </Col>
      </Row>
    );
  }
}

export default Header;
