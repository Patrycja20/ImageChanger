import React, { Component } from 'react';
import Header from './Header';
import Links from './Links';
import Footer from './Footer';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <br/>
        <Links/>
        <Footer/>
      </div>
    );
  }
}

export default MainPage;
