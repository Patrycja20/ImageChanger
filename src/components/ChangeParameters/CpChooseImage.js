import React, { Component } from 'react';
import CpCanvas from './CpCanvas';
import './CpChooseImage.css';
import { resetParameters, setIsLoaded } from '../../actions';
import { connect } from 'react-redux';
import { getImageSurface, isPhotoTooBig } from './cpHelpers';

class CpChooseImage extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '', imageViewUrl: '', height: null, width: null};
  }

  getImageSize = (file) => {
    this.setState({
      width: null,
      height: null
    });
    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      const {width, height} = image;
      this.setState({
        width: width,
        height: height
      });
    };

    image.src = url;
  };

  _handleImageChange(e) {
    e.preventDefault();
    this.props.setIsLoaded(false);
    this.props.resetParameters();
    let reader = new FileReader();
    let file = e.target.files[0];
    this.getImageSize(file);

    reader.onloadend = () => {
      this.props.setIsLoaded(true);
      this.setState({
        file: file,
        imageViewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  getInfoAboutPhoto = () => {
    const {width, height} = this.state;
    if ((width > 0 && height > 0) === false) return 'Module preffers max. 5 Mpix photo';

    const Mpix = getImageSurface(width, height);
    const warning = isPhotoTooBig(width, height)
      ? <span className='warning'> Your photo is too big. Scripts may works slowly. </span>
      : null;

    return <span className='px-3'><b>{Mpix} Mpix</b> ({width} x {height}). {warning}</span>;
  };

  render() {
    const {imageViewUrl} = this.state;
    const imageView = (imageViewUrl && this.state.width > 0 && this.state.height > 0) ?
      (<CpCanvas width={this.state.width} height={this.state.height} name={imageViewUrl}/>) :
      (<div className='canvasHolder'>Please select an Image<br/>
        <canvas width={1920} height={1080}/>
      </div>);

    return (
      <div className="ChooseImage">
        <form>
          <input className="fileInput" type="file" onChange={(e) => this._handleImageChange(e)}/>
          {this.getInfoAboutPhoto()}
        </form>
        {imageView}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    parameters: state.parameters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetParameters: () => dispatch(resetParameters()),
    setIsLoaded: (isLoaded) => dispatch(setIsLoaded(isLoaded))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CpChooseImage);