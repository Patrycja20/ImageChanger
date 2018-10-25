import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsFetched } from '../actions/index';
import { withRouter, Route, Link } from 'react-router-dom'
import MainPage from './MainPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact strict component={MainPage}/><Link to="/">Back</Link></div>
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

