import React, { Component } from 'react';
import CpCanvas from './CpCanvas';
import './CPChooseImage.css';

class CpChooseImage extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imageViewUrl: '', height: null, width: null};
  }

  getImageSize = (file) => {

    this.setState({
      width: null,
      height: null
    });

    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      const { width, height } = image;
      this.setState({
        width: width,
        height: height
      });
    };

    image.src = url;
  };

  _handleSubmit(e) {
    e.preventDefault();
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    this.getImageSize(file);

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageViewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }

  render() {
    let { imageViewUrl } = this.state;
    let $imageView = null;
    if (imageViewUrl && this.state.width > 0 && this.state.height > 0) {
      $imageView = (<CpCanvas width={this.state.width} height={this.state.height} name={imageViewUrl}/>);
    } else {
      $imageView = (<div>Please select an Image<br/>
        <canvas width={1910} height={1080}/>
      </div>);
    }

    return (
      <div className="ChooseImage">
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input className="fileInput" type="file" onChange={(e) => this._handleImageChange(e)}/> Preferowane maks.
          (1920 x 1080)
        </form>
        <div className="imgView">
          {$imageView}
        </div>
      </div>
    )
  }
}

export default CpChooseImage;