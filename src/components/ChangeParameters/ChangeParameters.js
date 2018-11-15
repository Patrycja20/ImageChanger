import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import CpHeader from './CpHeader';
import CpParameters from './CpParameters';
import CpChooseImage from './CpChooseImage';
import connect from 'react-redux/es/connect/connect';

class ChangeParameters extends Component {
  render() {
    let {isLoaded} = this.props.parameters;
    const blocked = isLoaded ? "" : "grayscale(0.9) opacity(0.4)";
    return (
      <div>
        <CpHeader/>
        <Container fluid>
          <Row>
            <Col md={4} xl={3} style={{filter: blocked}}>
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

function mapStateToProps(state) {
  return {
    parameters: state.parameters,
  };
}

export default connect(mapStateToProps)(ChangeParameters);