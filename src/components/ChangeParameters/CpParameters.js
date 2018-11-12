import React, { Component } from 'react';
import {
  setBrightness,
  setContrast,
  setSaturation,
  setSharpness,
  setAbleToChange,
  setNumberOfShades,
  resetParameters,
  setBlackAndWhite,
} from '../../actions';
import { Row, Col } from 'reactstrap';
import './CpParameters.css';
import { connect } from 'react-redux';

class CpParameters extends Component {
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

  changeNumberOfShades = (e) => {
    this.props.setNumberOfShades(e.target.value);
  };

  changeBlackAndWhite = (e) => {
    this.props.setBlackAndWhite(e.target.checked);
  };

  mouseDown = () => {
    this.props.setAbleToChange(false);
  };

  mouseUp = () => {
    this.props.setAbleToChange(true);
  };

  render() {
    let { brightness, contrast, saturation, sharpness, numberOfShades, blackAndWhite } = this.props.parameters;

    return <div className="InputsRange">
      <Row>
        <Col>
          <label for="Brightness" onDoubleClick={() => this.props.setBrightness(0)}>Brightness: {brightness}</label>
          <input type="range" class="Range custom-range" min="-255" max="255" step="1" id="brightness"
                 value={brightness}
                 onInput={this.changeBrightness} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <label for="Contrast" onDoubleClick={() => this.props.setContrast(0)}>Contrast: {contrast}</label>
          <input type="range" class="Range custom-range" min="-255" max="255" step="1" id="contrast" value={contrast}
                 onChange={this.changeContrast} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <label for="Saturation" onDoubleClick={() => this.props.setSaturation(1.0)}>Saturation: {saturation}</label>
          <input type="range" class="Range custom-range" min="0" max="2" step="0.1" id="saturation" value={saturation}
                 onChange={this.changeSaturation} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <label for="Sharpness" onDoubleClick={() => this.props.setSharpness(0)}>Sharpness: {sharpness}</label>
          <input type="range" class="Range custom-range" min="0" max="255" step="1" id="sharpness" value={sharpness}
                 onChange={this.changeSharpness} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <label for="Number Of Shades" onDoubleClick={() => this.props.setNumberOfShades(0)}>Number Of Shades: {numberOfShades}</label>
          <input type="range" class="Range custom-range" min="0" max="16" step="1" id="numberOfShades"
                 value={numberOfShades}
                 onChange={this.changeNumberOfShades} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="CheckBox" onDoubleClick={() => this.props.setBlackAndWhite(false)}>
            Black and White
            <input type="checkbox" id="blackAndWhite" checked={blackAndWhite} onChange={this.changeBlackAndWhite}/>
            <span className="checkmark"></span>
          </label>
        </Col>
      </Row>
      < Row>
        <Col>
        <button className="btn btn-info btn-lg ClearParameters" type='reset' onClick={this.props.resetParameters}> Reset</button>
        </Col>
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
    setNumberOfShades: (numberOfShades) => dispatch(setNumberOfShades(numberOfShades)),
    setBlackAndWhite: (blackAndWhite) => dispatch(setBlackAndWhite(blackAndWhite)),
    resetParameters: () => dispatch(resetParameters()),
    setAbleToChange: (ableToChange) => dispatch(setAbleToChange(ableToChange))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CpParameters);