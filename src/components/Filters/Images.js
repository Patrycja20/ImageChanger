import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import './Images.css';

class Images extends Component {
  render() {
    return <div className="Images">
      <Row>
        <Col>Original</Col>
        <Col>Winter</Col>
        <Col>Coffee with milk</Col>
      </Row>
      <Row>
        <Col><Link to="/Filters/View"><img className="Frame" src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img className="Winter Frame" src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img className="CoffeeWithMilk Frame" src={this.props.imageSRC}/></Link></Col>
      </Row>
      <Row>
        <Col>Summer</Col>
        <Col>Tea</Col>
        <Col>Black & White</Col>
      </Row>
      <Row>
        <Col><Link to="/Filters/View"><img className="Summer Frame" src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img className="Tea Frame" src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img className="BlackWhite Frame" src={this.props.imageSRC}/></Link></Col>
      </Row>
      <Row>
        <Col>Dirty window</Col>
        <Col>Fairyland</Col>
        <Col>Vice versa</Col>
      </Row>
      <Row>
        <Col><Link to="/Filters/View"><img className="DirtyWindow Frame" src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img className="Fairyland Frame" src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img className="ViceVersa Frame" src={this.props.imageSRC}/></Link></Col>
      </Row>
    </div>
  }
}

export default Images;