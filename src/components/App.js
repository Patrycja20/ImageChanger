import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsFetched } from '../actions/index';
import { withRouter, Route } from 'react-router-dom'
import MainPage from './MainPage';
import Coloring from './Coloring';
import EditionImage from './EditionImage';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact strict component={MainPage}/>
        <Route path="/Coloring" component={Coloring}/>
        <Route path="/EditionImage" component={EditionImage}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    contacts: state.contacts // (1)
  }
};
const mapDispatchToProps = {contactsFetched}; // (2)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); // (3

