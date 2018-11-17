import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import CpHeader from './CpHeader';
import CpParameters from './CpParameters';
import CpChooseImage from './CpChooseImage';
import { connect } from 'react-redux';
import { resetStore } from '../../actions';

class ChangeParameters extends Component {

  componentDidMount() {
    this.props.resetStore();
  }

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

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    resetStore: () => dispatch(resetStore()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeParameters);