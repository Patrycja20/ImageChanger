import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

const Root = () =>
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <App/>
    </Router>
  </Provider>;

export default Root;