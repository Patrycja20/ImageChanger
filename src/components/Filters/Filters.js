import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';

import { setImageURL } from '../../actions/index';
import Images from './Images';
import './Filters.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft);


class Filters extends Component {

  changeImageURL(e) {
    this.props.setImageURL(e);
  };

  _handleSubmit(e) {
    e.preventDefault();
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.changeImageURL(reader.result);
    }

    reader.readAsDataURL(file);
  }

  render() {
    let imageView = null;
    if (this.props.filters.imageURL) {
      imageView = (<Images/>);
    } else {
      imageView = (<div className="Info">Please select an Image</div>);
    }

    return (
      <div>
        <nav className="Filters navbar-expand-sm">
          <div className='Brand'>
            <Link className="Back" to="/">
              <span className="back-icon"><FontAwesomeIcon icon="angle-left"/></span>
              <span className='navbar-brand'>Filters</span>
            </Link>
          </div>
          <div className="HeaderFilters">
            <form onSubmit={(e) => this._handleSubmit(e)}>
              <input type="file" onChange={(e) => this._handleImageChange(e)}/>
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
    setImageURL: (imageURL) => dispatch(setImageURL(imageURL)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
