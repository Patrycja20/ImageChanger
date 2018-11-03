import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setImageURL} from '../../actions/index';
import {Link} from 'react-router-dom';
import {Row} from 'reactstrap';

import Images from './Images';
import './Filters.css';


class Filters extends Component {

  changeImageURL(e) {
    this.props.setImageURL(e);
  };

  _handleSubmit(e) {
    e.preventDefault();
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.changeImageURL(reader.result);
    }

    reader.readAsDataURL(file);
  }

  render() {
    let imageView = null;
    if (this.props.filters.imageURL) {
      imageView = (<Images/>);
    } else {
      imageView = (<div className="Info">Please select an Image</div>);
    }

    return <div>
      <div className="Filters">
        <div className="HeaderFilters">
        <Row>
          <h2>
            <Link className="Back" to="/">&lt;</Link>
            Filters
          </h2>
          <form className="Form" onSubmit={(e) => this._handleSubmit(e)}>
            <input type="file" onChange={(e) => this._handleImageChange(e)}/>
          </form>
        </Row>
        </div>
      </div>
      <div className="ContentFilters">
        {imageView}
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setImageURL: (imageURL) => dispatch(setImageURL(imageURL)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
