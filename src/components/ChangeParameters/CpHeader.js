import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './CpHeader.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CpHeader extends Component {
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

export default CpHeader;
