import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Header from './Header';
import Parameters from './Parameters';
import ChooseImage from './ChooseImage';

class ChangeParameters extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container fluid>
          <Row>
            <Col md={4} xl={3}>
              <Parameters/>
            </Col>
            <Col md={8} xl={9}>
              <ChooseImage/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ChangeParameters;

