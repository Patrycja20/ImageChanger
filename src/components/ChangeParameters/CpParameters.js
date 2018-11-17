import React, { Component } from 'react';
import {
  setBrightness,
  setContrast,
  setSaturation,
  setVignetting,
  setAbleToChange,
  setNumberOfShades,
  setRed,
  setGreen,
  setBlue,
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

  changeRed = (e) => {
    this.props.setRed(e.target.checked);
  };

  changeGreen = (e) => {
    this.props.setGreen(e.target.checked);
  };

  changeBlue = (e) => {
    this.props.setBlue(e.target.checked);
  };

  mouseDown = () => {
    this.props.setAbleToChange(false);
  };

  mouseUp = () => {
    this.props.setAbleToChange(true);
  };

  render() {
    let {brightness, contrast, saturation, vignetting, numberOfShades, blackAndWhite, invertedColor, red, green, blue, isLoaded} = this.props.parameters;

    const blocked = isLoaded ? "" : "grayscale(0.9) opacity(0.4)";

    return <div className="InputsRange" style={{filter: blocked}}>
      <Row>
        <Col md={4} xl={4}>
          <label className="CheckBox" onDoubleClick={() => this.props.setRed(true)}>r
          <input type="checkbox" id="red" disabled={!isLoaded} onChange={this.changeRed} checked={red}/>
          <span className="Checkmark"></span>
        </label></Col>
        <Col md={4} xl={4}>
          <label className="CheckBox" onDoubleClick={() => this.props.setGreen(true)}>g
          <input type="checkbox" id="blue" disabled={!isLoaded} onChange={this.changeGreen} checked={green}/>
          <span className="Checkmark"></span>
        </label></Col>
        <Col md={4} xl={4}>
          <label className="CheckBox" onDoubleClick={() => this.props.setBlue(true)}>b
          <input type="checkbox" id="green" disabled={!isLoaded} onChange={this.changeBlue} checked={blue}/>
          <span className="Checkmark"></span>
        </label></Col>
      </Row>
      <hr/>
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
            <span className="Checkmark"></span>
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="CheckBox" onDoubleClick={() => this.props.setInvertedColor(false)}>
            Inverted Color
            <input type="checkbox" id="invertedColor" disabled={!isLoaded} checked={invertedColor}
                   onChange={this.changeInvertedColor}/>
            <span className="Checkmark"></span>
          </label>
        </Col>
      </Row>
      <hr/>
      < Row>
        <Col md={4} xl={9}>Pixel's color
          <div id="PixelColor" style={{width:"15px", height:"15px", border: "1px solid #471d69"}}></div>
        </Col>
        <Col md={4} xl={3}>
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
    setInvertedColor: (invertedColor) => dispatch(setInvertedColor(invertedColor)),
    setRed:(red) => dispatch(setRed(red)),
    setGreen:(green) => dispatch(setGreen(green)),
    setBlue:(blue) => dispatch(setBlue(blue)),
    resetParameters: () => dispatch(resetParameters()),
    setAbleToChange: (ableToChange) => dispatch(setAbleToChange(ableToChange))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CpParameters);