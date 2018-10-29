import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import Images from './Images';
import './Filters.css';


class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imageViewUrl: ''
    };
  }

  _handleCreateImages(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageViewUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  _handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    let { imageViewUrl } = this.state;
    let $imageView = null;
    if (imageViewUrl) {
      $imageView = (<Images imageSRC={imageViewUrl}/>);
    } else {
      $imageView = (<div>Please select an Image</div>);
    }

    return <div>
      <div className="Filters">
        <Col>
          <h2>
            <Link className="Back" to="/">&lt;</Link>
            Filters
            <form onSubmit={(e) => this._handleSubmit(e)}>
              <input type="file" className="form-control-file" onChange={(e) => this._handleCreateImages(e)}/>
            </form>
          </h2>
        </Col>
      </div>
      <div>
        Krzysiek jest fajny!
        {$imageView}
      </div>
    </div>
  }
}

export default Filters;