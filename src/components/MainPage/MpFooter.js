import React, { Component } from 'react';
import './MpHeaderFooter.css';
import { Col, Row } from 'reactstrap';

class MpFooter extends Component {
  render() {
    return (
      <Row className='footer'>
        <Col>
          Code on <a href="https://github.com/Patrycja20/ImageChanger">GitHub</a>
        </Col>
        <Col className='text-right'>
          &copy; Patrycja Madyda & Krzysztof Komar
        </Col>
      </Row>
    );
  }
}

export default MpFooter;