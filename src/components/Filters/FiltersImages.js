import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSelectedFilter } from '../../actions';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import './FiltersImages.css';
import { filtersList } from './filtersHelpers';

class FiltersImages extends Component {
  imageTileRenderer = (filtersList) => {
    const {imageURL} = this.props.filters;

    return filtersList.map((filter) => (
      <Col md={4} xs={6} className="FilterImage" key={filter.name}>
        {filter.name}
        <Link to="/Filters/View">
          <img
            onClick={() => this.props.setSelectedFilter(filter)}
            className='Frame'
            style={{filter: filter.specification}}
            src={imageURL}
            alt={filter.name}
          />
        </Link>
      </Col>
    ));
  };

  render() {
    return (
      <div className="FilterImages">
        <Row>
          {this.imageTileRenderer(filtersList)}
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedFilter: (selectedFilter) => dispatch(setSelectedFilter(selectedFilter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersImages);