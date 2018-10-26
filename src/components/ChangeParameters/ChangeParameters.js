import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'reactstrap';
import Header from './Header';
import ChooseImage from './ChooseImage';

class ChangeParameters extends Component {
  render() {
    return (
      <div>
        <Header/>
          <Row>
            <Col>
              <ChooseImage/>
            </Col>
          </Row>
        <Row>
          <Link to="/">Back</Link>
        </Row>
      </div>
    );
  }
}

export default ChangeParameters;

