import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Filters.css';
import './FiltersView.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { canvasDownloadPopup } from '../../helpers';

library.add(faAngleLeft);
library.add(faLongArrowAltRight);

class FiltersView extends Component {

  componentDidMount() {
    const img = this.refs.image;
    const { imageURL } = this.props.filters;

    if (!img || !imageURL) {
      this.props.history.push('/Filters');
      return;
    }

    img.onload = () => {
      const ctx = this.refs.canvas.getContext('2d');

      ctx.clearRect(0, 0, this.props.filters.width, this.props.filters.height);
      ctx.filter = this.props.filters.selectedFilter.specification;
      ctx.drawImage(img, 0, 0);
    }
  }

  saveAsJpg = () => {
    canvasDownloadPopup(this.refs.canvas);
  };

  render() {
    let { imageURL, selectedFilter, width, height } = this.props.filters;

    if (!imageURL) {
      return <div>Go back and select image first.</div>;
    }

    return (
      <div className='Filters'>
        <nav className="navbar navbar-expand-sm">
          <div className='Brand'>
            <Link className="Back" to="/Filters">
              <span className="back-icon"><FontAwesomeIcon icon="angle-left" className='scale2x'/></span>
              <span className='navbar-brand'>
                Filters
                <FontAwesomeIcon icon="long-arrow-alt-right" className='mx-3'/>
                {selectedFilter.name}
              </span>
            </Link>
          </div>
          <div className='mx-4'>
            <button type="button" className="btn btn-secondary" onClick={this.saveAsJpg}>Save as *.jpg</button>
          </div>
        </nav>
        <div className="Photo justify-content-center">
          <div className="full-view">
            <img
              ref="image"
              className='max-foto-size'
              style={{ filter: selectedFilter.specification }}
              src={imageURL}
              alt={selectedFilter.name}
            />
            <canvas ref="canvas" width={width} height={height} className='hidden'/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersView);