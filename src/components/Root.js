import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

const Root = () =>
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>;

export default Root;