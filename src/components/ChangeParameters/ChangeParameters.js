import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import CpHeader from './CpHeader';
import CpParameters from './CpParameters';
import CpChooseImage from './CpChooseImage';

class ChangeParameters extends Component {
  render() {
    return (
      <div>
        <CpHeader/>
        <Container fluid>
          <Row>
            <Col md={4} xl={3}>
              <CpParameters/>
            </Col>
            <Col md={8} xl={9}>
              <CpChooseImage/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ChangeParameters;

