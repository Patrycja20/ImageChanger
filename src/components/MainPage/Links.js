import React,{ Component } from 'react';
import Coloring from '../Coloring';
import EditionImage from '../EditionImage';
import { Link } from 'react-router-dom';
import {Col, Row} from 'reactstrap';
import './Links.css';


class Links extends Component {
  render() {
    return <div><Row>
      <Col>
        <Link to="/EditionImage"><button className="button1">Edition Image</button></Link>
        </Col>
      <Col>
        <Link to="/Coloring"><button className="button2">Coloring</button></Link>
        </Col>
    </Row></div>
}
}

export default Links;