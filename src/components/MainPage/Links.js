import React,{ Component } from 'react';
import Coloring from '../Coloring';
import EditionImage from '../EditionImage';
import { Link, Route } from 'react-router-dom';
import {Col, Row} from 'reactstrap';

class Links extends Component {
  render() {
    return <div><Row>
      <Col>
        <Link to="/EditionImage"><button className="button1">Edition Image</button></Link>
        <Route path="/Coloring" component={Coloring}/></Col>
      <Col>
        <Link to="/Coloring"><button className="button2">Coloring</button></Link>
        <Route path="/EditionImage" component={EditionImage}/></Col>
    </Row></div>
}
}

export default Links;