import React, {Component} from 'react';
import {Row} from 'reactstrap';
import './Parameters.css';

class Parameters extends Component {
  render() {
    return <div className="InputsRange">
      <Row>
        <label for="Brightness">Brightness</label>
        <input type="range" class="Range custom-range" min="0" max="1" step="0.1" id="Brightness"/>
      </Row>
      <Row>
        <label for="Contrast">Contrast</label>
        <input type="range" class="Range custom-range" min="0" max="1" step="0.1" id="Contrast"/>
      </Row>
      <Row>
        <label for="Saturation">Saturation</label>
        <input type="range" class="Range custom-range" min="0" max="1" step="0.1" id="Saturation"/>
      </Row>
      <Row>
        <label for="Sharpness">Sharpness</label>
        <input type="range" class="Range custom-range" min="0" max="1" step="0.1" id="Sharpness"/>
      </Row>
      <Row>
        <label for="Grey Scale">Grey Scale</label>
        <input type="range" class="Range custom-range" min="0" max="1" step="0.1" id="Grey Scale"/>
      </Row>
    </div>
  }
}

export default Parameters;