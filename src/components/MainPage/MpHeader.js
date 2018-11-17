import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './MpHeaderFooter.css';

class MpHeader extends Component {
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

export default MpHeader;