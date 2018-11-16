import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './CpHeader.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { canvasDownloadPopup } from '../../helpers';

class CpHeader extends Component {

  saveAsJpg = () => {
    canvasDownloadPopup(this.props.canvasRef);
  };

  render() {

    const isDisplayDownloadButton = this.props.isLoaded;

    return (
      <nav className="Header navbar navbar-expand-sm">
        <div className='Brand'>
          <Link className="Back" to="/">
            <span className="back-icon"><FontAwesomeIcon icon="angle-left" className='scale2x'/></span>
            <span className='navbar-brand'>Change Parameters</span>
          </Link>
        </div>
        <div className='nav-item button-save' style={{ display: isDisplayDownloadButton ? 'inline' : 'none' }}>
          <button type="button" className="btn btn-secondary" onClick={this.saveAsJpg}>Save as *.jpg</button>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.parameters.isLoaded,
  canvasRef: state.parameters.canvasRef,
});

export default connect(mapStateToProps)(CpHeader);
