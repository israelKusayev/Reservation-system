import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router } from 'react-router-dom';
import history from './utils/history';
import { Provider } from 'react-redux';
import store from './store';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/mainStyles.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App store={store} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
