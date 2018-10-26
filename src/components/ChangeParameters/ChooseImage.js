import React, {Component} from 'react';
import Canvas from './Canvas';
import './ChooseImage.css';

class ChooseImage extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imageViewUrl: '' };
  }

  _handleSubmit(e) {
    e.preventDefault();
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageViewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imageViewUrl } = this.state;
    let $imageView = null;
    if (imageViewUrl) {
      $imageView = (<Canvas name={imageViewUrl} />);
    } else {
      $imageView = (<div className="previewText">Please select an Image</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input className="fileInput" type="file" onChange={(e) => this._handleImageChange(e)} />
        </form>
        <div className="imgPreview">
          {$imageView}
        </div>
      </div>
    )
  }
}

export default ChooseImage;