import React, { Component } from 'react';
import {
  setBrightness,
  setContrast,
  setSaturation,
  setVignetting,
  setAbleToChange,
  setNumberOfShades,
  resetParameters,
  setBlackAndWhite,
  setInvertedColor,
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

  changeVignetting = (e) => {
    this.props.setVignetting(e.target.value);
  };

  changeNumberOfShades = (e) => {
    this.props.setNumberOfShades(e.target.value);
  };

  changeBlackAndWhite = (e) => {
    this.props.setBlackAndWhite(e.target.checked);
  };

  changeInvertedColor = (e) => {
    this.props.setInvertedColor(e.target.checked);
  };

  mouseDown = () => {
    this.props.setAbleToChange(false);
  };

  mouseUp = () => {
    this.props.setAbleToChange(true);
  };

  render() {
    let { brightness, contrast, saturation, vignetting, numberOfShades, blackAndWhite, invertedColor, isLoaded } = this.props.parameters;
    return <div className="InputsRange">
      <Row>
        <Col>
          <label for="Brightness" onDoubleClick={() => this.props.setBrightness(0)}>Brightness: {brightness}</label>
          <input type="range" class="Range custom-range" min="-255" max="255" step="1" id="brightness"
                 value={brightness} disabled={!isLoaded}
                 onInput={this.changeBrightness} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <label for="Contrast" onDoubleClick={() => this.props.setContrast(0)}>Contrast: {contrast}</label>
          <input type="range" class="Range custom-range" min="-255" max="255" step="1" id="contrast"
                 value={contrast} disabled={!isLoaded}
                 onChange={this.changeContrast} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <label for="Saturation" onDoubleClick={() => this.props.setSaturation(1.0)}>Saturation: {saturation}</label>
          <input type="range" class="Range custom-range" min="0" max="2" step="0.01" id="saturation"
                 value={saturation} disabled={!isLoaded}
                 onChange={this.changeSaturation} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <label for="Vignetting" onDoubleClick={() => this.props.setVignetting(0)}>Vignetting: {vignetting}</label>
          <input type="range" class="Range custom-range" min="0" max="1" step="0.01" id="vignetting"
                 value={vignetting} disabled={!isLoaded}
                 onChange={this.changeVignetting} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <label for="Number Of Shades" onDoubleClick={() => this.props.setNumberOfShades(0)}>Number Of
            Shades: {numberOfShades}</label>
          <input type="range" class="Range custom-range" min="0" max="16" step="1" id="numberOfShades"
                 value={numberOfShades} disabled={!isLoaded}
                 onChange={this.changeNumberOfShades} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}/>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          <label className="CheckBox" onDoubleClick={() => this.props.setBlackAndWhite(false)}>
            Black and White
            <input type="checkbox" id="blackAndWhite" disabled={!isLoaded} checked={blackAndWhite}
                   onChange={this.changeBlackAndWhite}/>
            <span className="checkmark"></span>
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="CheckBox" onDoubleClick={() => this.props.setInvertedColor(false)}>
            Inverted Color
            <input type="checkbox" id="invertedColor" disabled={!isLoaded} checked={invertedColor}
                   onChange={this.changeInvertedColor}/>
            <span className="checkmark"></span>
          </label>
        </Col>
      </Row>
      <hr/>
      < Row>
        <Col>
          <button className="btn btn-info btn-lg ClearParameters" type='reset'
                  onClick={this.props.resetParameters}> Reset
          </button>
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
    setVignetting: (vignetting) => dispatch(setVignetting(vignetting)),
    setNumberOfShades: (numberOfShades) => dispatch(setNumberOfShades(numberOfShades)),
    setBlackAndWhite: (blackAndWhite) => dispatch(setBlackAndWhite(blackAndWhite)),
    setInvertedColor:(invertedColor) => dispatch(setInvertedColor(invertedColor)),
    resetParameters: () => dispatch(resetParameters()),
    setAbleToChange: (ableToChange) => dispatch(setAbleToChange(ableToChange))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CpParameters);