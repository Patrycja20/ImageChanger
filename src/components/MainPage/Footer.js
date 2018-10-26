import React, {Component} from 'react';
import './HeaderFooter.css';
import {Col, Row} from 'reactstrap';

class Footer extends Component {
  render() {
    return <div className="Container">
      <Row>
        <Col>
          The code on <a href="https://github.com/Patrycja20/ImageChanger">GitHub</a>
        </Col>
        <Col> &copy; Copyright Patrycja Madyda i Krzysztof Komar</Col>
      </Row>
    </div>
  }
}

export default Footer;