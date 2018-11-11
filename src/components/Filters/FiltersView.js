import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Filters.css';
import './FiltersView.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft);
library.add(faLongArrowAltRight);

class FiltersView extends Component {
  render() {
    let {imageURL, selectedFilter} = this.props.filters;

    return (
      <div className='Filters'>
        <nav className="navbar navbar-expand-sm">
          <div className='Brand'>
            <Link className="Back" to="/Filters">
              <span className="back-icon"><FontAwesomeIcon icon="angle-left" className='scale2x'/></span>
              <span className='navbar-brand'>Filters <FontAwesomeIcon icon="long-arrow-alt-right"/> View</span>
            </Link>
          </div>
        </nav>
        <div className="Photo justify-content-center">
          <div className="full-view">
            <img  className={selectedFilter} style={{maxHeight: '100%', maxWidth: '100%'}} src={imageURL}/>
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
