import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import Header from './Header';
import Parameters from './Parameters';
import ChooseImage from './ChooseImage';

class ChangeParameters extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div class="d-flex justify-content-around">
          <Row>
            <Col>
              <Parameters/>
            </Col>
            <Col>
              <ChooseImage/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ChangeParameters;

