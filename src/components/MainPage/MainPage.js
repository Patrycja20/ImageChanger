import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from './Header';
import Links from './Links';
import Footer from './Footer';


class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>
        <Container fluid>
          <Header/>
        </Container>
        <Container>
          <Links/>
          <Footer/>
        </Container>
      </div>
    );
  }
}

export default MainPage;
