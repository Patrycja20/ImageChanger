import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'reactstrap';
import './Filters.css';

class Filters extends Component {
  render() {
    return <div>
      <div className="Title2">
        <Col>
          <h2>
            <Link className="Back2" to="/">&lt;</Link>
            Filters
          </h2>
        </Col>
      </div>
      <div>
        Krzysiek jest fajny!
      </div>
    </div>
  }
}

export default Filters;