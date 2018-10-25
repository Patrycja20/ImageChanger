import React, { Component } from 'react';
import Header from './Header';
import Links from './Links';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <br/>
        <Links/>
      </div>
    );
  }
}

export default MainPage;
