import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom'
import { store } from '../store';
import App from './App';

const Root = () =>
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App/>
    </Router>
  </Provider>;

export default Root;