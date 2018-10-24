import React, { Component } from 'react';
import { connect } from "react-redux";
import { contactsFetched } from "./actions";

class App extends Component {
  render() {
    return (
      <div>
        ble
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    contacts: state.contacts // (1)
  }
};
const mapDispatchToProps = { contactsFetched }; // (2)

export default connect(mapStateToProps, mapDispatchToProps)(App); // (3

