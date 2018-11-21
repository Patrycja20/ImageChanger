import React, { Component } from 'react';
import CpCanvas from './CpCanvas';
import './CpChooseImage.css';
import { resetParameters, setIsLoaded } from '../../actions';
import { connect } from 'react-redux';
import { calcWindowSize, getImageSurface, isPhotoTooBig } from './cpHelpers';

class CpChooseImage extends Component {

  state = {
    file: '',
    imageViewUrl: '',
    imageSize: { height: null, width: null },
    containerSize: { height: null, width: null },
  };

  getImageSize = (file) => {
    this.setState({
      imageSize: {
        width: null,
        height: null
      }
    });
    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      const { width, height } = image;
      this.setState({
        imageSize: {
          width: width,
          height: height
        }
      });
      this.updateContainerDimensions();
    };

    image.src = url;
  };

  updateContainerDimensions = () => {
    this.setState({
      containerSize: calcWindowSize(window),
    });
  };

  _handleImageChange(e) {
    e.preventDefault();
    this.props.setIsLoaded(false);
    this.props.resetParameters();
    let reader = new FileReader();
    let file = e.target.files[0];
    this.getImageSize(file);

    reader.onloadend = () => {
      if (file.type.search('image') < 0) {
        alert(`Wrong file type! (${file.type}) Try again with correct image file.`);
        return;
      }

      this.props.setIsLoaded(true);
      this.setState({
        file: file,
        imageViewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  getInfoAboutPhoto = () => {
    const {width, height} = this.state.imageSize;
    if ((width > 0 && height > 0) === false) return 'Module preffers max. 5 Mpix photo';

    const Mpix = getImageSurface(width, height);
    const warning = isPhotoTooBig(width, height)
      ? <span className='warning'> Your photo is too big. Scripts may works slowly. </span>
      : null;

    return <span className='px-3'><b>{Mpix} Mpix</b> ({width} x {height}). {warning}</span>;
  };

  render() {
    const {imageViewUrl, imageSize, containerSize} = this.state;
    const imageView = (imageViewUrl && imageSize.width > 0 && imageSize.height > 0) ?
      (<CpCanvas imageSize={imageSize} containerSize={containerSize} name={imageViewUrl}/>) :
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