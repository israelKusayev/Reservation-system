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
    axios.defaults.baseURL = 'http://localhost:4000';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    console.log(store.getState().auth.loading);
  };

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <NavBar />
            <Loading />
            <div>
              <MainForm />
            </div>
          </div>
          <Switch>
            {/* <Route path='/register' component={Register} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
