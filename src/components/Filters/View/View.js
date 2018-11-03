import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Row} from 'reactstrap';
import {Link} from 'react-router-dom';

class View extends Component {
  render() {
    let {imageURL, selectedFilter} = this.props.filters;

    return <div>
        <div className="Filters">
          <h2>
            <Link className="Back" to="/Filters">&lt;</Link>
            Filters -> View
          </h2>
        </div>
      <div className="Images">
        <img className={selectedFilter} src={imageURL}/>
      </div>
      <Row>
      </Row>
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