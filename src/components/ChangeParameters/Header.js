import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'reactstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Col>
          <h2>
            <Link className="Back" to="/">&lt;</Link>
            Change Parameters
          </h2>
        </Col>
      </div>
    );
  }
}

export default Header;