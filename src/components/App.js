import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Route} from 'react-router-dom'
import {contactsFetched} from '../actions/index';

import MainPage from './MainPage/MainPage';
import Filters from './Filters/Filters';
import Drawing from './Drawing/Drawing';
import ChangeParameters from './ChangeParameters/ChangeParameters';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact strict component={MainPage}/>
        <Route path="/ChangeParameters" component={ChangeParameters}/>
        <Route path="/Filters" component={Filters}/>
        <Route path="/Drawing" component={Drawing}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
};
const mapDispatchToProps = {contactsFetched};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
