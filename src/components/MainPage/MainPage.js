import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MpHeader from './MpHeader';
import MpLinks from './MpLinks';
import MpFooter from './MpFooter';

class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>
        <Container fluid>
          <MpHeader/>
        </Container>
        <Container>
          <MpLinks/>
          <MpFooter/>
        </Container>
      </div>
    );
  }
}

export default MainPage;