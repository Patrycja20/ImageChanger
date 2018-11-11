import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';

import { setImageURL } from '../../actions/index';
import Images from './FiltersImages';
import './Filters.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft);


class Filters extends Component {

  handleImageChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.props.setImageURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { imageURL } = this.props.filters;
    const imageView = imageURL ? <Images/> : <div className="alert alert-dark">Please select an image</div>;

    return (
      <div className='Filters'>
        <nav className="navbar navbar-expand-sm">
          <div className='Brand'>
            <Link className="Back" to="/">
              <span className="back-icon"><FontAwesomeIcon icon="angle-left" className='scale2x'/></span>
              <span className='navbar-brand'>Filters</span>
            </Link>
          </div>
          <div className="HeaderFilters">
            <form>
              <input type="file" onChange={this.handleImageChange}/>
            </form>
          </div>
        </nav>
        <Container fluid>
          <Row>
            <Col>
              <div className="ContentFilters">
                {imageView}
              </div>
            </Col>
          </Row>
        </Container>
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
  return {
    setImageURL: (imageURL) => dispatch(setImageURL(imageURL)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
