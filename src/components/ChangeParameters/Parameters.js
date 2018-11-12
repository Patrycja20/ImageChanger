import React, { Component } from 'react';
import { setBrightness, setContrast, setSaturation, setSharpness, setGreyscale, setAbleToChange } from '../../actions';
import { Row, Col } from 'reactstrap';
import './Parameters.css';
import { connect } from 'react-redux';

class Parameters extends Component {
  changeBrightness = (e) => {
    this.props.setBrightness(e.target.value);
  };

  changeContrast = (e) => {
    this.props.setContrast(e.target.value);
  };

  changeSaturation = (e) => {
    this.props.setSaturation(e.target.value);
  };

  changeSharpness = (e) => {
    this.props.setSharpness(e.target.value);
  };

  changeGreyscale = (e) => {
    this.props.setGreyscale(e.target.value);
  };

  mouseDown = () => {
    this.props.setAbleToChange(false);
  };

  mouseUp = () => {
    this.props.setAbleToChange(true);
  };

  render() {
    let { brightness, contrast, saturation, sharpness, greyscale } = this.props.parameters;

    return <div className="InputsRange">
      <Row>
        <Col>
          <label for="Brightness">Brightness: {brightness}</label>
          <input type="range" class="Range custom-range" min="0" max="255" step="1" id="brightness" value={brightness}
                 onInput={this.changeBrightness} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>

          <label for="Contrast">Contrast: {contrast}</label>
          <input type="range" class="Range custom-range" min="0" max="255" step="1" id="contrast" value={contrast}
                 onChange={this.changeContrast} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>

          <label for="Saturation">Saturation: {saturation}</label>
          <input type="range" class="Range custom-range" min="1" max="2" step="0.1" id="saturation" value={saturation}
                 onChange={this.changeSaturation} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>

          <label for="Sharpness">Sharpness: {sharpness}</label>
          <input type="range" class="Range custom-range" min="0" max="255" step="1" id="sharpness" value={sharpness}
                 onChange={this.changeSharpness} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>

          <label for="Grey Scale">Grey Scale: {greyscale}</label>
          <input type="range" class="Range custom-range" min="0" max="1" step="0.2" id="greyscale" value={greyscale}
                 onChange={this.changeGreyscale} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <button type="reset">Reset</button>
      </Row>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    parameters: state.parameters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setBrightness: (brightness) => dispatch(setBrightness(brightness)),
    setContrast: (contrast) => dispatch(setContrast(contrast)),
    setSaturation: (saturation) => dispatch(setSaturation(saturation)),
    setSharpness: (sharpness) => dispatch(setSharpness(sharpness)),
    setGreyscale: (greyscale) => dispatch(setGreyscale(greyscale)),
    setAbleToChange: (ableToChange) => dispatch(setAbleToChange(ableToChange))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Parameters);