import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsFetched } from '../actions/index';
import { Route, Link } from 'react-router-dom'
import EditionImage from './EditionImage';
import Coloring from './Coloring';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/Coloring">
          Hello
        </Link>
        <Route path="/" exact strict component={Main}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App); // (3

