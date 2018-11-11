import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'reactstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  render() {
    return (
      <nav className="Header navbar navbar-expand-sm">
        <div className='Brand'>
          <Link className="Back" to="/">
            <span className="back-icon"><FontAwesomeIcon icon="angle-left" className='scale2x'/></span>
            <span className='navbar-brand'>Change Parameters</span>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
