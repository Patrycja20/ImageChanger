import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import './Images.css';

class Images extends Component {
  render() {
    return <div className="Images">
      <Row>
        <Col>Original</Col>
        <Col>Kawa</Col>
        <Col>Biało-czarny</Col>
      </Row>
      <Row>
        <Col><Link to="/Filters/View"><img src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img src={this.props.imageSRC}/></Link></Col>
      </Row>
      <Row>
        <Col>Original</Col>
        <Col>Kawa</Col>
        <Col>Biało-czarny</Col>
      </Row>
      <Row>
        <Col><Link to="/Filters/View"><img src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img src={this.props.imageSRC}/></Link></Col>
      </Row>
      <Row>
        <Col>Original</Col>
        <Col>Kawa</Col>
        <Col>Biało-czarny</Col>
      </Row>
      <Row>
        <Col><Link to="/Filters/View"><img src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img src={this.props.imageSRC}/></Link></Col>
        <Col><Link to="/Filters/View"><img src={this.props.imageSRC}/></Link></Col>
      </Row>
    </div>
  }
}

export default Images;