import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft);
library.add(faLongArrowAltRight);

class View extends Component {
  render() {
    let {imageURL, selectedFilter} = this.props.filters;

    return <div>
      <nav className="Filters navbar-expand-sm">
        <div className='Brand'>
          <Link className="Back" to="/Filters">
            <span className="back-icon"><FontAwesomeIcon icon="angle-left"/></span>
            <span className='navbar-brand'>Filters <FontAwesomeIcon icon="long-arrow-alt-right"/> View</span>
          </Link>
        </div>
      </nav>
      <div className="Photo">
      <div className="Images">
        <img className={selectedFilter} src={imageURL}/>
      </div>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(View);