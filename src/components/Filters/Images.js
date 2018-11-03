import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setSelectedFilter} from '../../actions';
import {Link} from 'react-router-dom';
import {Col, Row} from 'reactstrap';
import './Images.css';

class Images extends Component {
  changeSelectedFilter(e) {
    this.props.setSelectedFilter(e);
  };


  render() {
    let {imageURL} = this.props.filters;
    const FiltersArray =
      ['Frame', 'Winter Frame', 'CoffeeWithMilk Frame', 'Spring Frame', 'Tea Frame', 'BlackWhite Frame', 'DirtyWindow Frame', 'Fairyland Frame', 'ViceVersa Frame'];

    return <div className="Images">
      <Row>
        <Col className="FilterImage">Original
          <Link to="/Filters/View">
            <img onClick={() => this.changeSelectedFilter(FiltersArray[0])}
                 className={FiltersArray[0]} src={imageURL}/>
          </Link>
        </Col>
        <Col className="FilterImage">Winter
          <Link to="/Filters/View">
            <img onClick={() => this.changeSelectedFilter(FiltersArray[1])}
                 className={FiltersArray[1]} src={imageURL}/>
          </Link>
        </Col>
        <Col className="FilterImage">Coffee with milk
          <Link to="/Filters/View">
            <img onClick={() => this.changeSelectedFilter(FiltersArray[2])}
                 className={FiltersArray[2]} src={imageURL}/>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="FilterImage">Spring
          <Link to="/Filters/View">
            <img onClick={() => this.changeSelectedFilter(FiltersArray[3])}
                 className={FiltersArray[3]} src={imageURL}/>
          </Link>
        </Col>
        <Col className="FilterImage">Tea
          <Link to="/Filters/View">
            <img onClick={() => this.changeSelectedFilter(FiltersArray[4])}
                 className={FiltersArray[4]} src={imageURL}/>
          </Link>
        </Col>
        <Col className="FilterImage">Black & White
          <Link to="/Filters/View">
            <img onClick={() => this.changeSelectedFilter(FiltersArray[5])}
                 className={FiltersArray[5]} src={imageURL}/>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="FilterImage">Dirty window
          <Link to="/Filters/View">
            <img onClick={() => this.changeSelectedFilter(FiltersArray[6])}
                 className={FiltersArray[6]} src={imageURL}/>
          </Link>
        </Col>
        <Col className="FilterImage">Fairyland
          <Link to="/Filters/View">
            <img onClick={() => this.changeSelectedFilter(FiltersArray[7])}
                 className={FiltersArray[7]} src={imageURL}/>
          </Link>
        </Col>
        <Col className="FilterImage">Vice versa
          <Link to="/Filters/View">
            <img onClick={() => this.changeSelectedFilter(FiltersArray[8])}
                 className={FiltersArray[8]} src={imageURL}/>
          </Link>
        </Col>
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
  return {
    setSelectedFilter: (selectedFilter) => dispatch(setSelectedFilter(selectedFilter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);
