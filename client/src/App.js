import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';
import NavBar from './components/navBar';
import MainForm from './components/mainForm';
import Loading from './components/loading';

class App extends Component {
  componentDidMount = () => {
    // to do extract to diffrent file
    axios.defaults.baseURL = 'http://localhost:4000';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  };

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Loading />
          <MainForm />
          {/* to do extract switch to anther component */}
          <Switch>
            {/* <Route path='/register' component={Register} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
